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
        "@mysticatea/vue/html-end-tags": "error",
        "@mysticatea/vue/html-no-self-closing": "error",
        "@mysticatea/vue/html-quotes": "error",
        "@mysticatea/vue/no-confusing-v-for-v-if": "error",
        "@mysticatea/vue/no-duplicate-attributes": "error",
        "@mysticatea/vue/no-invalid-template-root": "error",
        "@mysticatea/vue/no-invalid-v-bind": "error",
        "@mysticatea/vue/no-invalid-v-cloak": "error",
        "@mysticatea/vue/no-invalid-v-else": "error",
        "@mysticatea/vue/no-invalid-v-else-if": "error",
        "@mysticatea/vue/no-invalid-v-for": "error",
        "@mysticatea/vue/no-invalid-v-html": "error",
        "@mysticatea/vue/no-invalid-v-if": "error",
        "@mysticatea/vue/no-invalid-v-model": "error",
        "@mysticatea/vue/no-invalid-v-on": "error",
        "@mysticatea/vue/no-invalid-v-once": "error",
        "@mysticatea/vue/no-invalid-v-pre": "error",
        "@mysticatea/vue/no-invalid-v-show": "error",
        "@mysticatea/vue/no-invalid-v-text": "error",
        "@mysticatea/vue/no-parsing-error": "error",
        "@mysticatea/vue/no-textarea-mustache": "error",
        "@mysticatea/vue/require-component-is": "error",
        "@mysticatea/vue/require-v-for-key": "error",
        "@mysticatea/vue/v-bind-style": "error",
        "@mysticatea/vue/v-on-style": "error",
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
    },
    "settings": {
        "node": {"tryExtensions": [".js", ".json", ".vue"]},
        "react": {"pragma": "h"},
    },
}
