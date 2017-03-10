/**
 * @author Toru Nagashima
 * @copyright 2016 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const assert = require("assert")
const fs = require("fs")
const path = require("path")
const validator = require("eslint/lib/config/config-validator")
const CORE_RULES_DIR = path.join(__dirname, "../node_modules/eslint/lib/rules/")
const MYSTICATEA_RULES_DIR = path.join(__dirname, "../node_modules/eslint-plugin-mysticatea/lib/rules/")
const NODE_RULES_DIR = path.join(__dirname, "../node_modules/eslint-plugin-node/lib/rules/")
const COMMENT_RULES_DIR = path.join(__dirname, "../node_modules/eslint-plugin-eslint-comments/lib/rules/")

/**
 * Gets existing rules from a given directory.
 *
 * @param {string} rootPath - A path of rules directory.
 * @param {string} prefix - A prefix.
 * @returns {string[]} Existing rule list.
 */
function getRuleList(rootPath, prefix) {
    return fs.readdirSync(rootPath)
        .map(filename => {
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
    const rule = require(`eslint/lib/rules/${name}`)
    const meta = rule && rule.meta
    const docs = meta && meta.docs
    const category = docs && docs.category

    return category === "ECMAScript 6" && !isDeprecated(name)
}

/**
 * Checks whether a given core rule is deprecated or not.
 *
 * @param {string} name - The name of a rule.
 * @returns {boolean} `true` if the rule is deprecated.
 */
function isDeprecated(name) {
    const sep = name.indexOf("/")
    const moduleId = (sep === -1) ? "eslint" : `eslint-plugin-${name.slice(0, sep)}`
    const ruleId = (sep === -1) ? name : name.slice(sep + 1)
    const rule = require(`${moduleId}/lib/rules/${ruleId}`)
    const meta = rule && rule.meta

    return Boolean(meta && meta.deprecated)
}

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

describe("'base.js'", () => {
    const config = require("../base").rules
    const existingRules = [].concat(
        getRuleList(CORE_RULES_DIR, ""),
        getRuleList(MYSTICATEA_RULES_DIR, "mysticatea/"),
        getRuleList(COMMENT_RULES_DIR, "eslint-comments/")
    ).filter(name => !isDeprecated(name))
    const removedRules = Object.keys(require("eslint/conf/replacements.json").rules)
    const deprecatedRules = getRuleList(CORE_RULES_DIR, "").filter(isDeprecated)

    for (const name of existingRules) {
        it(`should include existing rule '${name}'.`, () => {
            assert(name in config, `'${name}' is not found.`)
            validator.validateRuleOptions(name, config[name], "base.js")
        })
    }

    for (const name of removedRules) {
        it(`should not include removed rule '${name}'.`, () => {
            assert(name in config === false, `'${name}' is found.`)
        })
    }

    for (const name of deprecatedRules) {
        it(`should not include deprecated rule '${name}'.`, () => {
            assert(name in config === false, `'${name}' is found.`)
        })
    }
})

describe("'node.js'", () => {
    const config = require("../node").rules
    const existingRules = getRuleList(NODE_RULES_DIR, "node/").filter(name => !isDeprecated(name))
    const deprecatedRules = getRuleList(NODE_RULES_DIR, "node/").filter(isDeprecated)

    for (const name of existingRules) {
        it(`should include existing rule '${name}'.`, () => {
            assert(name in config, `'${name}' is not found.`)
            validator.validateRuleOptions(name, config[name], "node.js")
        })
    }

    for (const name of deprecatedRules) {
        it(`should not include deprecated rule '${name}'.`, () => {
            assert(name in config === false, `'${name}' is found.`)
        })
    }
})

describe("'es5.js'", () => {
    const config = require("../es5").rules
    const es6Rules = getRuleList(CORE_RULES_DIR, "").filter(isES6Rule)

    for (const name of es6Rules) {
        it(`should turn ES6 rule '${name}' off.`, () => {
            assert.strictEqual(config[name], "off")
        })
    }
})

describe("'browser.js'", () => {
    const config = require("../browser").rules

    for (const name of Object.keys(config)) {
        it(`should have valid options of '${name}' rule.`, () => {
            validator.validateRuleOptions(name, config[name], "browser.js")
        })
    }
})
