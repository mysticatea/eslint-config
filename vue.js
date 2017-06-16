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
        "node/exports-style": "off",
        "node/no-deprecated-api": "error",
        "node/no-extraneous-import": "error",
        "node/no-extraneous-require": "error",
        "node/no-missing-import": "error",
        "node/no-missing-require": "error",
        "node/no-unpublished-bin": "error",
        "node/no-unpublished-import": "error",
        "node/no-unpublished-require": "error",
        "node/no-unsupported-features": "off",
        "node/process-exit-as-throw": "error",
        "node/shebang": "error",
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "vue/html-end-tags": "error",
        "vue/html-no-self-closing": "error",
        "vue/html-quotes": "error",
        "vue/no-confusing-v-for-v-if": "error",
        "vue/no-duplicate-attributes": "error",
        "vue/no-invalid-template-root": "error",
        "vue/no-invalid-v-bind": "error",
        "vue/no-invalid-v-cloak": "error",
        "vue/no-invalid-v-else": "error",
        "vue/no-invalid-v-else-if": "error",
        "vue/no-invalid-v-for": "error",
        "vue/no-invalid-v-html": "error",
        "vue/no-invalid-v-if": "error",
        "vue/no-invalid-v-model": "error",
        "vue/no-invalid-v-on": "error",
        "vue/no-invalid-v-once": "error",
        "vue/no-invalid-v-pre": "error",
        "vue/no-invalid-v-show": "error",
        "vue/no-invalid-v-text": "error",
        "vue/no-parsing-error": "error",
        "vue/no-textarea-mustache": "error",
        "vue/require-component-is": "error",
        "vue/require-v-for-key": "error",
        "vue/v-bind-style": "error",
        "vue/v-on-style": "error",
    },
    "settings": {
        "node": {"tryExtensions": [".js", ".json", ".vue"]},
        "react": {"pragma": "h"},
    },
}
