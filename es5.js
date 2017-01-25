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
        //eslint-disable-next-line sort-keys
        "arrow-body-style": "off",
        "arrow-parens": "off",
        "arrow-spacing": "off",
        "class-methods-use-this": "off",
        "constructor-super": "off",
        "generator-star-spacing": "off",
        "no-class-assign": "off",
        "no-confusing-arrow": "off",
        "no-const-assign": "off",
        "no-dupe-class-members": "off",
        "no-duplicate-imports": "off",
        "no-new-symbol": "off",
        "no-restricted-imports": "off",
        "no-template-curly-in-string": "off",
        "no-this-before-super": "off",
        "no-useless-computed-key": "off",
        "no-useless-constructor": "off",
        "no-useless-rename": "off",
        "no-var": "off",
        "object-shorthand": "off",
        "prefer-arrow-callback": "off",
        "prefer-const": "off",
        "prefer-destructuring": "off",
        "prefer-numeric-literals": "off",
        "prefer-reflect": "off",
        "prefer-rest-params": "off",
        "prefer-spread": "off",
        "prefer-template": "off",
        "require-yield": "off",
        "rest-spread-spacing": "off",
        "sort-imports": "off",
        "symbol-description": "off",
        "template-curly-spacing": "off",
        "yield-star-spacing": "off",

        // My plugin.
        //eslint-disable-next-line sort-keys
        "mysticatea/arrow-parens": "off",
        "mysticatea/block-scoped-var": "error",
        "mysticatea/no-useless-rest-spread": "off",
    },
}
