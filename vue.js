/**
 * @author Toru Nagashima
 * @copyright 2017 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

module.exports = {
    "extends": ["./browser.js", "./modules.js"],
    "globals": { "process": false },
    "parser": "vue-eslint-parser",
    "parserOptions": {
        "ecmaFeatures": { "jsx": true },
        "ecmaVersion": 2017,
    },
    "rules": {
        "no-process-env": "off",
        "vue/attribute-hyphenation": "error",
        "vue/html-end-tags": "error",
        "vue/html-quotes": "error",
        "vue/html-self-closing": "error",
        "vue/name-property-casing": "error",
        "vue/no-async-in-computed-properties": "error",
        "vue/no-confusing-v-for-v-if": "error",
        "vue/no-dupe-keys": "error",
        "vue/no-duplicate-attributes": "error",
        "vue/no-parsing-error": "error",
        "vue/no-reservered-keys": "error",
        "vue/no-shared-component-data": "error",
        "vue/no-side-effects-in-computed-properties": "error",
        "vue/no-template-key": "error",
        "vue/no-textarea-mustache": "error",
        "vue/order-in-components": "error",
        "vue/require-component-is": "error",
        "vue/require-prop-types": "error",
        "vue/require-render-return": "error",
        "vue/require-v-for-key": "error",
        "vue/require-valid-default-prop": "error",
        "vue/return-in-computed-property": "error",
        "vue/v-bind-style": "error",
        "vue/v-on-style": "error",
        "vue/valid-template-root": "error",
        "vue/valid-v-bind": "error",
        "vue/valid-v-cloak": "error",
        "vue/valid-v-else": "error",
        "vue/valid-v-else-if": "error",
        "vue/valid-v-for": "error",
        "vue/valid-v-html": "error",
        "vue/valid-v-if": "error",
        "vue/valid-v-model": "error",
        "vue/valid-v-on": "error",
        "vue/valid-v-once": "error",
        "vue/valid-v-pre": "error",
        "vue/valid-v-show": "error",
        "vue/valid-v-text": "error",
    },
    "settings": {
        "node": {
            "tryExtensions": [".js", ".json", ".vue"],
        },
    },
}
