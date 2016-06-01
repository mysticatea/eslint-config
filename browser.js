/**
 * @author Toru Nagashima
 * @copyright 2015 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

var originalGlobals = require("globals").browser
var globals = {}
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
    "window",
]

Object.keys(originalGlobals).forEach(function(key) {
    if (key[0] === key[0].toUpperCase() || allows.indexOf(key) !== -1) {
        globals[key] = originalGlobals[key]
    }
})

module.exports = {
    "globals": globals,
}
