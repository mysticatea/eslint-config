/**
 * @author Toru Nagashima
 * @copyright 2015 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict";

var assign = require("object-assign");
var globals = assign({}, require("globals").browser);
var allows = [
    "atob",
    "btoa",
    "cancelAnimationFrame",
    "clearInterval",
    "clearTimeout",
    "console",
    "document",
    "fetch",
    "indexedDB",
    "localStorage",
    "matchMedia",
    "requestAnimationFrame",
    "sessionStorage",
    "setInterval",
    "setTimeout",
    "window"
];

Object.keys(globals).forEach(function(key) {
    if (key[0] === key[0].toLowerCase() && allows.indexOf(key) === -1) {
        delete globals[key];
    }
});

module.exports = {
    "globals": globals
};
