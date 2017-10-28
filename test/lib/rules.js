/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * @copyright 2017 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const Validator = require("eslint/lib/config/config-validator")
const Environments = require("eslint/lib/config/environments")
const Plugins = require("eslint/lib/config/plugins")
const Rules = require("eslint/lib/rules")

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const environments = new Environments()
const allRules = new Rules()
const coreRules = new Rules()
const plugins = new Plugins(environments, allRules)

plugins.loadAll(["eslint-comments", "import", "mysticatea", "node", "vue"])

//------------------------------------------------------------------------------
// Exports
//------------------------------------------------------------------------------

/**
 * Validate the given options of a rule.
 * @param {string} id The rule ID to check.
 * @param {any[]} options The options to check.
 * @param {string} source The filename of the configuration to show error messages.
 * @returns {void}
 */
module.exports.validateRuleOptions = (id, options, source) =>
    Validator.validateRuleOptions(id, options, source, allRules)

/**
 * Get the rule definition of the given ID.
 * @param {string} ruleId The rule ID to get.
 * @returns {object} The rule definition.
 */
module.exports.getRuleDefinition = (ruleId) =>
    allRules.get(ruleId)

/**
 * Get the core rules.
 * @returns {string[]} The core rule names.
 */
module.exports.getCoreRuleNames = () =>
    Array.from(coreRules.getAllLoadedRules().keys())

/**
 * Get the plugin rules.
 * @param {"eslint-comments"|"mysticatea"|"node"|"vue"} pluginName The plugin name to get.
 * @returns {object} The core rules. Keys are rule IDs and values are each rule definition.
 */
module.exports.getPluginRuleNames = (pluginName) =>
    Object.keys(plugins.get(pluginName).rules).map(ruleId => `${pluginName}/${ruleId}`)
