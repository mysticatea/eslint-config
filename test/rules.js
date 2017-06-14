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
const Rules = require("./lib/rules")

/**
 * Checks whether a given core rule is an ES6 rule or not.
 *
 * @param {string} ruleId - The name of a core rule.
 * @returns {boolean} `true` if the rule is an ES6 rule.
 */
function isES6Rule(ruleId) {
    const def = Rules.getRuleDefinition(ruleId)
    const category = def && def.meta && def.meta.docs && def.meta.docs.category

    return category === "ECMAScript 6"
}

/**
 * Checks whether a given core rule is deprecated or not.
 *
 * @param {string} ruleId - The name of a rule.
 * @returns {boolean} `true` if the rule is deprecated.
 */
function isDeprecated(ruleId) {
    const def = Rules.getRuleDefinition(ruleId)
    return Boolean(def && def.meta && def.meta.deprecated)
}

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

describe("'base.js'", () => {
    const config = require("../base").rules
    const allRules = [].concat(
        Rules.getCoreRuleNames(),
        Rules.getPluginRuleNames("eslint-comments"),
        Rules.getPluginRuleNames("mysticatea")
    )
    const existingRules = allRules.filter(name => !isDeprecated(name))
    const deprecatedRules = allRules.filter(isDeprecated)
    const removedRules = Object.keys(require("eslint/conf/replacements.json").rules)

    for (const name of existingRules) {
        it(`should include existing rule '${name}'.`, () => {
            assert(name in config, `'${name}' is not found.`)
            Rules.validateRuleOptions(name, config[name], "base.js")
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
    const existingRules = Rules.getPluginRuleNames("node").filter(name => !isDeprecated(name))
    const deprecatedRules = Rules.getPluginRuleNames("node").filter(isDeprecated)

    for (const name of existingRules) {
        it(`should include existing rule '${name}'.`, () => {
            assert(name in config, `'${name}' is not found.`)
            Rules.validateRuleOptions(name, config[name], "node.js")
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
    const es6Rules = Rules.getCoreRuleNames().filter(isES6Rule).filter(name => !isDeprecated(name))

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
            Rules.validateRuleOptions(name, config[name], "browser.js")
        })
    }
})

describe("'vue.js'", () => {
    const config = require("../vue").rules
    const allRules = [].concat(
        Rules.getPluginRuleNames("node"),
        Rules.getPluginRuleNames("@mysticatea/vue")
    )
    const existingRules = allRules.filter(name => !isDeprecated(name))
    const deprecatedRules = allRules.filter(isDeprecated)

    for (const name of existingRules) {
        it(`should include existing rule '${name}'.`, () => {
            assert(name in config, `'${name}' is not found.`)
            Rules.validateRuleOptions(name, config[name], "vue.js")
        })
    }

    for (const name of deprecatedRules) {
        it(`should not include deprecated rule '${name}'.`, () => {
            assert(name in config === false, `'${name}' is found.`)
        })
    }
})
