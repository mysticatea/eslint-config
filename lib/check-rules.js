/*eslint no-process-exit:0, no-console:0*/

var fs = require("fs");
var path = require("path");
var assign = require("object-assign");
var coreRules = require("../base").rules;
var reactRules = require("../react").rules;
var coreActualRules = assign(
  getRuleMap(path.join(__dirname, "../node_modules/eslint/lib/rules/"), ""),
  getRuleMap(path.join(__dirname, "../node_modules/eslint-plugin-mysticatea/lib/rules/"), "mysticatea/")
);
var reactActualRules = getRuleMap(path.join(__dirname, "../node_modules/eslint-plugin-react/lib/rules/"), "react/");
var name = "";
var missingRuleExists = false;

function getRuleMap(rootPath, prefix) {
  return fs.readdirSync(rootPath).reduce(function makeMap(retv, filename) {
    if (path.extname(filename) === ".js") {
      var key = prefix + path.basename(filename, ".js");
      retv[key] = true;
    }
    return retv;
  }, {});
}

for (name in coreRules) {
  if (name in coreActualRules === false) {
    console.error("✗ \"" + name + "\" rule had removed.");
    missingRuleExists = true;
  }
}

for (name in coreActualRules) {
  if (name in coreRules === false) {
    console.error("✗ \"" + name + "\" rule had added.");
    missingRuleExists = true;
  }
}

for (name in reactRules) {
  if (/^react/.test(name) && name in reactActualRules === false) {
    console.error("✗ \"" + name + "\" rule had removed.");
    missingRuleExists = true;
  }
}

for (name in reactActualRules) {
  if (/^react/.test(name) && name in reactRules === false) {
    console.error("✗ \"" + name + "\" rule had added.");
    missingRuleExists = true;
  }
}

if (missingRuleExists) {
  process.exit(1);
}
