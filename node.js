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
        "node/no-missing-import": 2,
        "node/no-missing-require": 2,
        "node/no-unpublished-import": 2,
        "node/no-unpublished-require": 2,
        "node/no-unsupported-features": 2,
        "node/shebang": 2
    }
};
