/**
 * @author Toru Nagashima
 * @copyright 2015 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict";

var extend = require("./lib/extend");
var base = require("./base");

module.exports = extend(base, {
    "rules": {
        // Possible Errors Section
        "no-inner-declarations": [2, "functions"], // syntax-error in ES5

        // Best Practices Section
        "no-proto": 2,
        "no-redeclare": 0, // `mysticatea/block-scoped-var` instead.

        // ECMAScript 6 Section
        "no-var": 0,
        "object-shorthand": 0,
        "prefer-arrow-callback": 0,
        "prefer-const": 0,
        "prefer-reflect": 0,
        "prefer-rest-params": 0,
        "prefer-spread": 0,
        "prefer-template": 0,

        // My plugin.
        "mysticatea/arrow-parens": 0,
        "mysticatea/block-scoped-var": 2
    }
});
