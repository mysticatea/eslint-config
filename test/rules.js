/**
 * @author Toru Nagashima
 * @copyright 2016 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

var assert = require("assert")
var fs = require("fs")
var path = require("path")
var validator = require("eslint/lib/config/config-validator")
var CORE_RULES_DIR = path.join(__dirname, "../node_modules/eslint/lib/rules/")
var MYSTICATEA_RULES_DIR = path.join(__dirname, "../node_modules/eslint-plugin-mysticatea/lib/rules/")
var NODE_RULES_DIR = path.join(__dirname, "../node_modules/eslint-plugin-node/lib/rules/")
var COMMENT_RULES_DIR = path.join(__dirname, "../node_modules/eslint-plugin-eslint-comments/lib/rules/")

/**
 * Gets existing rules from a given directory.
 *
 * @param {string} rootPath - A path of rules directory.
 * @param {string} prefix - A prefix.
 * @returns {string[]} Existing rule list.
 */
function getRuleList(rootPath, prefix) {
    return fs.readdirSync(rootPath)
        .map(function(filename) {
            if (path.extname(filename) === ".js") {
                return prefix + path.basename(filename, ".js")
            }
            return null
        })
        .filter(Boolean)
}

/**
 * Checks whether a given core rule is an ES6 rule or not.
 *
 * @param {string} name - The name of a core rule.
 * @returns {boolean} `true` if the rule is an ES6 rule.
 */
function isES6Rule(name) {
    var rule = require("eslint/lib/rules/" + name)
    var meta = rule && rule.meta
    var docs = meta && meta.docs
    var category = docs && docs.category

    return category === "ECMAScript 6"
}

/**
 * Checks whether a given core rule is deprecated or not.
 *
 * @param {string} name - The name of a core rule.
 * @returns {boolean} `true` if the rule is deprecated.
 */
function isDeprecated(name) {
    var rule = require("eslint/lib/rules/" + name)
    var meta = rule && rule.meta

    return Boolean(meta && meta.deprecated)
}

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

describe("'base.js'", function() {
    var config = require("../base").rules
    var existingRules = [].concat(
        getRuleList(CORE_RULES_DIR, ""),
        getRuleList(MYSTICATEA_RULES_DIR, "mysticatea/"),
        getRuleList(COMMENT_RULES_DIR, "eslint-comments/")
    )
    var removedRules = Object.keys(require("eslint/conf/replacements.json").rules)
    var deprecatedRules = getRuleList(CORE_RULES_DIR, "").filter(isDeprecated)

    existingRules.forEach(function(name) {
        it("should include existing rule '" + name + "'.", function() {
            assert(name in config, "'" + name + "' is not found.")
            validator.validateRuleOptions(name, config[name], "base.js")
        })
    })

    removedRules.forEach(function(name) {
        it("should not include removed rule '" + name + "'.", function() {
            assert(name in config === false, "'" + name + "' is found.")
        })
    })

    deprecatedRules.forEach(function(name) {
        it("should turn deprecated rule '" + name + "' off.", function() {
            assert.strictEqual(config[name], "off")
        })
    })
})

describe("'node.js'", function() {
    var config = require("../node").rules
    var existingRules = getRuleList(NODE_RULES_DIR, "node/")

    existingRules.forEach(function(name) {
        it("should include existing rule '" + name + "'.", function() {
            assert(name in config, "'" + name + "' is not found.")
            validator.validateRuleOptions(name, config[name], "node.js")
        })
    })
})

describe("'es5.js'", function() {
    var config = require("../es5").rules
    var es6Rules = getRuleList(CORE_RULES_DIR, "").filter(isES6Rule)

    es6Rules.forEach(function(name) {
        it("should turn ES6 rule '" + name + "' off.", function() {
            assert.strictEqual(config[name], "off")
        })
    })
})
