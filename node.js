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
        "callback-return": 0,
        "global-require": 0,
        "handle-callback-err": 2,
        "no-mixed-requires": 2,
        "no-new-require": 2,
        "no-path-concat": 2,
        "no-process-env": 2,
        "no-process-exit": 2,
        "no-restricted-modules": 0,
        "no-sync": 0,

        "node/no-missing-import": 2,
        "node/no-missing-require": 2,
        "node/shebang": 2
    }
};
