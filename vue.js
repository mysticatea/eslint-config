/**
 * @author Toru Nagashima
 * @copyright 2017 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

module.exports = {
    "extends": ["./browser.js", "./node.js"],
    "parser": "vue-eslint-parser",
    "parserOptions": {
        "ecmaFeatures": {"jsx": true},
        "ecmaVersion": 2017,
    },
    "plugins": ["react"],
    "rules": {
        "node/no-unsupported-features": ["error", {"version": 7.6}],
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
    },
    "settings": {"react": {"pragma": "h"}},
}
