/**
 * @author Toru Nagashima
 * @copyright 2015 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

module.exports = {
    "parserOptions": { "sourceType": "module" },
    "plugins": [
        "import",
        "node",
    ],
    "rules": {
        "import/default": "error",
        "import/exports-last": "error",
        "import/first": "error",
        "import/named": "error",
        "import/newline-after-import": "error",
        "import/no-absolute-path": "error",
        "node/no-extraneous-import": "error",
        "node/no-missing-import": "error",
        "node/no-unpublished-import": "error",
    },
}
