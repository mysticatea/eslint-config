/**
 * @author Toru Nagashima
 * @copyright 2015 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

module.exports = {
    "plugins": ["mysticatea"],
    "rules": {
        "accessor-pairs": "error",
        "array-bracket-spacing": "error",
        "array-callback-return": "error",
        "arrow-body-style": "error",
        "arrow-spacing": "error",
        "block-spacing": "error",
        "brace-style": ["error", "stroustrup", {"allowSingleLine": false}],
        "camelcase": "error",
        "comma-dangle": ["error", "always-multiline"],
        "comma-spacing": "error",
        "comma-style": "error",
        "computed-property-spacing": "error",
        "consistent-return": "error",
        "constructor-super": "error",
        "curly": "error",
        "default-case": "error",
        "dot-location": ["error", "property"],
        "dot-notation": "error",
        "eol-last": "error",
        "eqeqeq": ["error", "allow-null"],
        "func-call-spacing": "error",
        "func-style": ["error", "declaration"],
        "generator-star-spacing": ["error", "after"],
        "indent": ["error", 4, {"SwitchCase": 1}],
        "init-declarations": "error",
        "jsx-quotes": ["error", "prefer-double"],
        "key-spacing": "error",
        "keyword-spacing": "error",
        "linebreak-style": ["error", "unix"],
        "max-statements-per-line": ["error", {"max": 1}],
        "new-cap": "error",
        "new-parens": "error",
        "no-alert": "error",
        "no-array-constructor": "error",
        "no-caller": "error",
        "no-case-declarations": "error",
        "no-catch-shadow": "error",
        "no-class-assign": "error",
        "no-cond-assign": "error",
        "no-const-assign": "error",
        "no-constant-condition": "error",
        "no-control-regex": "error",
        "no-debugger": "error",
        "no-delete-var": "error",
        "no-div-regex": "error",
        "no-dupe-args": "error",
        "no-dupe-class-members": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-duplicate-imports": ["error", {"includeExports": true}],
        "no-else-return": "error",
        "no-empty": "error",
        "no-empty-character-class": "error",
        "no-empty-function": "error",
        "no-empty-pattern": "error",
        "no-eval": "error",
        "no-ex-assign": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-extra-boolean-cast": "error",
        "no-extra-label": "error",
        "no-extra-parens": ["error", "functions"],
        "no-extra-semi": "error",
        "no-fallthrough": "error",
        "no-floating-decimal": "error",
        "no-func-assign": "error",
        "no-global-assign": "error",
        "no-implicit-coercion": "error",
        "no-implicit-globals": "error",
        "no-implied-eval": "error",
        "no-invalid-regexp": "error",
        "no-invalid-this": "error",
        "no-irregular-whitespace": ["error", {
            "skipComments": false,
            "skipRegExps": false,
            "skipStrings": false,
            "skipTemplates": false,
        }],
        "no-iterator": "error",
        "no-label-var": "error",
        "no-lone-blocks": "error",
        "no-lonely-if": "error",
        "no-loop-func": "error",
        "no-mixed-operators": ["error", {
            "groups": [
                ["&", "|", "^", "~", "<<", ">>", ">>>"],
                ["&&", "||"],
            ],
        }],
        "no-mixed-spaces-and-tabs": "error",
        "no-multi-spaces": "error",
        "no-multiple-empty-lines": "error",
        "no-new": "error",
        "no-new-object": "error",
        "no-new-require": "error",
        "no-new-symbol": "error",
        "no-new-wrappers": "error",
        "no-obj-calls": "error",
        "no-octal": "error",
        "no-octal-escape": "error",
        "no-param-reassign": ["error", {"props": false}],
        "no-process-env": "error",
        "no-process-exit": "error",
        "no-prototype-builtins": "error",
        "no-redeclare": ["error", {"builtinGlobals": true}],
        "no-regex-spaces": "error",
        "no-return-assign": "error",
        "no-script-url": "error",
        "no-self-assign": ["error", {"props": true}],
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-shadow": ["error", {"builtinGlobals": true}],
        "no-shadow-restricted-names": "error",
        "no-sparse-arrays": "error",
        "no-tabs": "error",
        "no-template-curly-in-string": "error",
        "no-this-before-super": "error",
        "no-throw-literal": "error",
        "no-trailing-spaces": "error",
        "no-undef": ["error", {"typeof": true}],
        "no-unexpected-multiline": "error",
        "no-unmodified-loop-condition": "error",
        "no-unneeded-ternary": "error",
        "no-unreachable": "error",
        "no-unsafe-finally": "error",
        "no-unsafe-negation": "error",
        "no-unused-expressions": "error",
        "no-unused-labels": "error",
        "no-unused-vars": ["error", {
            "argsIgnorePattern": "^_[a-zA-Z]+$",
            "caughtErrors": "all",
            "varsIgnorePattern": "^_[a-zA-Z]+$",
        }],
        "no-use-before-define": ["error", "nofunc"],
        "no-useless-call": "error",
        "no-useless-computed-key": "error",
        "no-useless-concat": "error",
        "no-useless-constructor": "error",
        "no-useless-escape": "error",
        "no-useless-rename": "error",
        "no-var": "error",
        "no-void": "error",
        "no-whitespace-before-property": "error",
        "no-with": "error",
        "object-curly-newline": "error",
        "object-curly-spacing": "error",
        "object-shorthand": "error",
        "one-var": ["error", {
            "initialized": "never",
            "uninitialized": "always",
        }],
        "operator-linebreak": ["error", "after", {
            "overrides": {
                ":": "ignore",
                "?": "ignore",
            },
        }],
        "padded-blocks": ["error", "never"],
        "prefer-arrow-callback": "error",
        "prefer-const": "error",
        "prefer-rest-params": "error",
        "prefer-spread": "error",
        "prefer-template": "error",
        "quote-props": ["error", "consistent-as-needed"],
        "quotes": ["error", "double"],
        "radix": "error",
        "require-jsdoc": ["error", {
            "require": {
                "ClassDeclaration": true,
                "FunctionDeclaration": true,
                "MethodDefinition": true,
            },
        }],
        "require-yield": "error",
        "rest-spread-spacing": "error",
        "semi": ["error", "never"],
        "semi-spacing": "error",
        "space-before-blocks": "error",
        "space-before-function-paren": ["error", "never"],
        "space-in-parens": "error",
        "space-infix-ops": "error",
        "space-unary-ops": "error",
        "spaced-comment": ["error", "always", {
            "block": {
                "balanced": true,
                "markers": [
                    "eslint",
                    "eslint-env",
                    "eslint-disable",
                    "eslint-enable",
                    "exported",
                    "globals",
                    "istanbul",
                ],
            },
            "line": {
                "exceptions": ["-", "="],
                "markers": [
                    "eslint-disable-line",
                    "eslint-disable-next-line",
                    "TODO:",
                    "FIXME:",
                ],
            },
        }],
        "strict": ["error", "global"],
        "symbol-description": "error",
        "template-curly-spacing": "error",
        "unicode-bom": ["error", "never"],
        "use-isnan": "error",
        "valid-jsdoc": ["error", {
            "prefer": {"return": "returns"},
            "preferType": {
                "Boolean": "boolean",
                "Function": "function",
                "Number": "number",
                "Object": "object",
                "String": "string",
                "Symbol": "symbol",
            },
            "requireReturn": true,
        }],
        "valid-typeof": ["error", {"requireStringLiterals": true}],
        "wrap-iife": ["error", "inside"],
        "yield-star-spacing": ["error", "after"],
        "yoda": ["error", "never", {"exceptRange": true}],

        //eslint-disable-next-line sort-keys
        "class-methods-use-this": "warn",
        "complexity": ["warn", {"max": 12}],
        "max-nested-callbacks": ["warn", {"max": 4}],
        "max-params": ["warn", {"max": 8}],
        "no-console": "warn",

        //eslint-disable-next-line sort-keys
        "arrow-parens": "off",                  // Use "mysticatea/arrow-parens"
        "block-scoped-var": "off",              // Use "mysticatea/block-scoped-var"
        "callback-return": "off",               // Under consideration...
        "consistent-this": "off",               // Meaningless, IMO.
        "func-names": "off",                    // This is noisy for co.js
        "global-require": "off",                // I'm sometimes using conditional require.
        "guard-for-in": "off",                  // I prefer `Object.create(null)`.
        "handle-callback-err": "off",           // Under consideration...
        "id-blacklist": "off",                  //
        "id-length": "off",                     //
        "id-match": "off",                      //
        "lines-around-comment": "off",          // Under consideration...
        "max-depth": "off",                     //
        "max-len": "off",                       //
        "max-lines": "off",                     //
        "max-statements": "off",                //
        "multiline-ternary": "off",             //
        "newline-after-var": "off",             // Case by case.
        "newline-before-return": "off",         // Case by case.
        "newline-per-chained-call": "off",      // Case by case.
        "no-bitwise": "off",                    // I'm familiar with bitwise ops.
        "no-confusing-arrow": "off",            // This is very noisy.
        "no-continue": "off",                   // I like fast return.
        "no-eq-null": "off",                    // I like eq null.
        "no-inline-comments": "off",            // This is an inline comment.
        "no-inner-declarations": "off",         // This is allowed on ES6+
        "no-labels": "off",                     //
        "no-magic-numbers": "off",              //
        "no-mixed-requires": "off",             // I'm using "on-ver" never.
        "no-multi-str": "off",                  // This is allowed on ES5+
        "no-negated-condition": "off",          // Case by case.
        "no-nested-ternary": "off",             // I like it.
        "no-new-func": "off",                   // I like it.
        "no-path-concat": "off",                // Under consideration...
        "no-plusplus": "off",                   // I often use it.
        "no-proto": "off",                      // This is allowed on ES6+
        "no-restricted-globals": "off",         //
        "no-restricted-imports": "off",         //
        "no-restricted-modules": "off",         //
        "no-restricted-syntax": "off",          //
        "no-sync": "off",                       // This is useful on CLI tools.
        "no-ternary": "off",                    // I like it.
        "no-undef-init": "off",                 //
        "no-undefined": "off",                  // This is safe on strict mode.
        "no-underscore-dangle": "off",          // Use for private.
        "no-warning-comments": "off",           //
        "object-property-newline": "off",       //
        "one-var-declaration-per-line": "off",  // Use one-var
        "operator-assignment": "off",           //
        "prefer-reflect": "off",                // Too early, IMO
        "sort-imports": "off",                  //
        "sort-keys": "off",                     //
        "sort-vars": "off",                     //
        "vars-on-top": "off",                   // I hate this.
        "wrap-regex": "off",                    //

        // Deprecated rules.
        //eslint-disable-next-line sort-keys
        "no-native-reassign": "off",
        "no-negated-in-lhs": "off",
        "no-spaced-func": "off",

        //eslint-disable-next-line sort-keys
        "mysticatea/arrow-parens": "error",
        "mysticatea/block-scoped-var": "off",   // Use on ES5 environment only.
        "mysticatea/no-literal-call": "error",
        "mysticatea/no-use-ignored-vars": "error",
        "mysticatea/no-useless-rest-spread": "error",
    },
}
