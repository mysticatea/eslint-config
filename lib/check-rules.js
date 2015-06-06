"use strict";
/*eslint no-process-exit:0*/

var fs = require("fs");
var path = require("path");
var coreRules = require("../base").rules;
var reactRules = require("../react").rules;
var deprecated = require("./deprecated.json");
var coreActualRules = getRuleMap(path.join(__dirname, "../node_modules/eslint/lib/rules/"), "");
var reactActualRules = getRuleMap(path.join(__dirname, "../node_modules/eslint-plugin-react/lib/rules/"), "react/");
var name = "";
var missingRuleExists = false;

function getRuleMap(rootPath, prefix) {
  return fs.readdirSync(rootPath).reduce(function(retv, filename) {
    if (path.extname(filename) === ".js") {
      var key = prefix + path.basename(filename, ".js");
      if (deprecated[key] !== true) {
        retv[key] = true;
      }
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
console.log("OK.");
