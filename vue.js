/**
 * @author Toru Nagashima
 * @copyright 2017 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

module.exports = {
    "extends": ["./browser.js", "./modules.js"],
    "globals": {"process": false},
    "parser": "vue-eslint-parser",
    "parserOptions": {
        "ecmaFeatures": {"jsx": true},
        "ecmaVersion": 2017,
    },
    "plugins": ["node", "react"],
    "rules": {
        "no-process-env": "off",
        "node/no-deprecated-api": "error",
        "node/no-missing-import": "error",
        "node/no-missing-require": "error",
        "node/no-unpublished-bin": "error",
        "node/no-unpublished-import": "error",
        "node/no-unpublished-require": "error",
        "node/process-exit-as-throw": "error",
        "node/shebang": "error",
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
    },
    "settings": {
        "node": {"tryExtensions": [".js", ".json", ".vue"]},
        "react": {"pragma": "h"},
    },
}
