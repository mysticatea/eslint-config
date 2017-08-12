/**
 * @author Toru Nagashima
 * @copyright 2015 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

const originalGlobals = require("globals").browser
const globals = {}
const allows = [
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

for (const key of Object.keys(originalGlobals)) {
    if (key[0] === key[0].toUpperCase() || allows.indexOf(key) !== -1) {
        globals[key] = originalGlobals[key]
    }
}

module.exports = {
    globals,
    "rules": { //
        "new-cap": ["error", { "capIsNewExceptions": ["EventTargetShim"] }],
    },
}
