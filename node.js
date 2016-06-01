/**
 * @author Toru Nagashima
 * @copyright 2015 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict";

var assign = require("object-assign");
var globals = assign({}, require("globals").node);

delete globals.arguments;
delete globals.Buffer;
delete globals.GLOBAL;
delete globals.global;
delete globals.root;

module.exports = {
    "parserOptions": {
        "ecmaFeatures": {"globalReturn": true}
    },
    "plugins": ["node"],
    "globals": globals,
    "rules": {
        "node/no-deprecated-api": "error",
        "node/no-missing-import": "error",
        "node/no-missing-require": "error",
        "node/no-unpublished-import": "error",
        "node/no-unpublished-require": "error",
        "node/no-unsupported-features": "error",
        "node/process-exit-as-throw": "error",
        "node/shebang": "error"
    }
};
