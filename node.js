/**
 * @author Toru Nagashima
 * @copyright 2015 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

module.exports = {
    "globals": {
        "__dirname": false,
        "__filename": false,
        "clearImmediate": false,
        "exports": false,
        "module": false,
        "process": false,
        "require": false,
        "setImmediate": false,
    },
    "parserOptions": { "ecmaFeatures": { "globalReturn": true } },
    "plugins": ["node"],
    "rules": {
        "node/exports-style": ["error", "module.exports"],
        "node/no-deprecated-api": "error",
        "node/no-extraneous-require": "error",
        "node/no-missing-require": "error",
        "node/no-unpublished-bin": "error",
        "node/no-unpublished-require": "error",
        "node/no-unsupported-features": "error",
        "node/process-exit-as-throw": "error",
        "node/shebang": "error",
    },
}
