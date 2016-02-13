/**
 * @author Toru Nagashima
 * @copyright 2015 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
/* eslint no-process-exit:0, no-console:0 */
"use strict";

var fs = require("fs");
var path = require("path");
var assign = require("object-assign");
var validator = require("eslint/lib/config/config-validator");
var coreRules = require("../base").rules;
var nodeRules = require("../node").rules;
var reactRules = require("../react").rules;
var coreActualRules = assign(
    getRuleMap(path.join(__dirname, "../node_modules/eslint/lib/rules/"), ""),
    getRuleMap(path.join(__dirname, "../node_modules/eslint-plugin-mysticatea/lib/rules/"), "mysticatea/")
);
var nodeActualRules = getRuleMap(path.join(__dirname, "../node_modules/eslint-plugin-node/lib/rules/"), "node/");
var reactActualRules = getRuleMap(path.join(__dirname, "../node_modules/eslint-plugin-react/lib/rules/"), "react/");
var name = "";
var missingRuleExists = false;

/**
 * Gets existing rules map from a given directory.
 *
 * @param {string} rootPath - A path of rules directory.
 * @param {string} prefix - A prefix text.
 * @returns {object} The map to check rules exist.
 */
function getRuleMap(rootPath, prefix) {
    return fs.readdirSync(rootPath).reduce(function makeMap(retv, filename) {
        if (path.extname(filename) === ".js") {
            var key = prefix + path.basename(filename, ".js");
            retv[key] = true;
        }
        return retv;
    }, {});
}

//-----------------------------------------------------------------------------
// Core rules.
//-----------------------------------------------------------------------------

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

for (name in coreRules) {
    try {
        validator.validateRuleOptions(name, coreRules[name], "base.js");
    }
    catch (err) {
        console.error("✗", err.message);
        missingRuleExists = true;
    }
}

//-----------------------------------------------------------------------------
// Node rules.
//-----------------------------------------------------------------------------

for (name in nodeRules) {
    if (name in nodeActualRules === false) {
        console.error("✗ \"" + name + "\" rule had removed.");
        missingRuleExists = true;
    }
}

for (name in nodeActualRules) {
    if (name in nodeRules === false) {
        console.error("✗ \"" + name + "\" rule had added.");
        missingRuleExists = true;
    }
}

for (name in nodeRules) {
    try {
        validator.validateRuleOptions(name, nodeRules[name], "node.js");
    }
    catch (err) {
        console.error("✗", err.message);
        missingRuleExists = true;
    }
}

//-----------------------------------------------------------------------------
// React rules.
//-----------------------------------------------------------------------------

for (name in reactRules) {
    if (name in reactActualRules === false) {
        console.error("✗ \"" + name + "\" rule had removed.");
        missingRuleExists = true;
    }
}

for (name in reactActualRules) {
    if (name in reactRules === false) {
        console.error("✗ \"" + name + "\" rule had added.");
        missingRuleExists = true;
    }
}

for (name in reactRules) {
    try {
        validator.validateRuleOptions(name, reactRules[name], "react.js");
    }
    catch (err) {
        console.error("✗", err.message);
        missingRuleExists = true;
    }
}

//-----------------------------------------------------------------------------

if (missingRuleExists) {
    process.exit(1);
}
