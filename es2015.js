/**
 * @author Toru Nagashima
 * @copyright 2015 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict";

var extend = require("./lib/extend");
var base = require("./base");

module.exports = extend(base, {
    "env": {"es6": true}
});
