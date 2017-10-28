/**
 * @author Toru Nagashima
 * @copyright 2015 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

module.exports = {
    "parserOptions": { "sourceType": "module" },
    "plugins": ["node"],
    "rules": {
        "node/no-extraneous-import": "error",
        "node/no-missing-import": "error",
        "node/no-unpublished-import": "error",
    },
}
