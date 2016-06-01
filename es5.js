/**
 * @author Toru Nagashima
 * @copyright 2015 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

module.exports = {
    "extends": "./base.js",
    "rules": {
        // Possible Errors Section
        "no-inner-declarations": ["error", "functions"], // syntax-error in ES5

        // Best Practices Section
        "no-proto": "error",
        "no-redeclare": "off", // `mysticatea/block-scoped-var` instead.

        // ECMAScript 6 Section
        "arrow-body-style": "off",
        "arrow-parens": "off",
        "arrow-spacing": "off",
        "constructor-super": "off",
        "generator-star-spacing": "off",
        "no-class-assign": "off",
        "no-confusing-arrow": "off",
        "no-const-assign": "off",
        "no-dupe-class-members": "off",
        "no-new-symbol": "off",
        "no-this-before-super": "off",
        "no-var": "off",
        "no-useless-constructor": "off",
        "object-shorthand": "off",
        "prefer-arrow-callback": "off",
        "prefer-const": "off",
        "prefer-reflect": "off",
        "prefer-rest-params": "off",
        "prefer-spread": "off",
        "prefer-template": "off",
        "require-yield": "off",
        "template-curly-spacing": "off",
        "yield-star-spacing": "off",

        // My plugin.
        "mysticatea/arrow-parens": "off",
        "mysticatea/block-scoped-var": "error",
    },
}
