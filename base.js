/**
 * @author Toru Nagashima
 * @copyright 2015 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict";

module.exports = {
    "plugins": ["mysticatea"],
    "rules": {
        "accessor-pairs": 2,
        "array-bracket-spacing": 2,
        "array-callback-return": 2,
        "arrow-body-style": 2,
        "arrow-spacing": 2,
        "block-spacing": 2,
        "brace-style": [2, "stroustrup", {"allowSingleLine": true}],
        "camelcase": 2,
        "comma-dangle": 2,
        "comma-spacing": 2,
        "comma-style": 2,
        "computed-property-spacing": 2,
        "consistent-return": 2,
        "constructor-super": 2,
        "curly": 2,
        "default-case": 2,
        "dot-location": [2, "property"],
        "dot-notation": 2,
        "eol-last": 2,
        "eqeqeq": [2, "allow-null"],
        "func-style": [2, "declaration"],
        "generator-star-spacing": [2, "after"],
        "indent": [2, 4, {"SwitchCase": 1}],
        "init-declarations": 2,
        "jsx-quotes": [2, "prefer-double"],
        "key-spacing": 2,
        "keyword-spacing": 2,
        "linebreak-style": [2, "unix"],
        "max-nested-callbacks": [2, 3],
        "new-cap": 2,
        "new-parens": 2,
        "no-alert": 2,
        "no-array-constructor": 2,
        "no-caller": 2,
        "no-case-declarations": 2,
        "no-catch-shadow": 2,
        "no-class-assign": 2,
        "no-cond-assign": 2,
        "no-console": 1,
        "no-const-assign": 2,
        "no-constant-condition": 2,
        "no-control-regex": 2,
        "no-debugger": 2,
        "no-delete-var": 2,
        "no-div-regex": 2,
        "no-dupe-args": 2,
        "no-dupe-class-members": 2,
        "no-dupe-keys": 2,
        "no-duplicate-case": 2,
        "no-else-return": 2,
        "no-empty": 2,
        "no-empty-character-class": 2,
        "no-empty-function": 0, // TODO: https://github.com/eslint/eslint/issues/5227
        "no-empty-pattern": 2,
        "no-eval": 2,
        "no-ex-assign": 2,
        "no-extend-native": 2,
        "no-extra-bind": 2,
        "no-extra-boolean-cast": 2,
        "no-extra-label": 2,
        "no-extra-parens": [2, "functions"],
        "no-extra-semi": 2,
        "no-fallthrough": 2,
        "no-floating-decimal": 2,
        "no-func-assign": 2,
        "no-implicit-coercion": 2,
        "no-implicit-globals": 2,
        "no-implied-eval": 2,
        "no-invalid-regexp": 2,
        "no-invalid-this": 2,
        "no-irregular-whitespace": 2,
        "no-iterator": 2,
        "no-label-var": 2,
        "no-lone-blocks": 2,
        "no-lonely-if": 2,
        "no-loop-func": 2,
        "no-mixed-spaces-and-tabs": 2,
        "no-multi-spaces": 2,
        "no-multiple-empty-lines": 2,
        "no-native-reassign": 2,
        "no-negated-in-lhs": 2,
        "no-new": 2,
        "no-new-object": 2,
        "no-new-require": 2,
        "no-new-symbol": 2,
        "no-new-wrappers": 2,
        "no-obj-calls": 2,
        "no-octal": 2,
        "no-octal-escape": 2,
        "no-param-reassign": [2, {"props": true}],
        "no-process-env": 2,
        "no-process-exit": 2,
        "no-redeclare": [2, {"builtinGlobals": true}],
        "no-regex-spaces": 2,
        "no-return-assign": 2,
        "no-script-url": 2,
        "no-self-assign": 2,
        "no-self-compare": 2,
        "no-sequences": 2,
        "no-shadow": 2,
        "no-shadow-restricted-names": 2,
        "no-spaced-func": 2,
        "no-sparse-arrays": 2,
        "no-this-before-super": 2,
        "no-throw-literal": 2,
        "no-trailing-spaces": 2,
        "no-undef": [2, {"typeof": true}],
        "no-undef-init": 2,
        "no-underscore-dangle": [2, {"allowAfterThis": true}],
        "no-unexpected-multiline": 2,
        "no-unmodified-loop-condition": 2,
        "no-unneeded-ternary": 2,
        "no-unreachable": 2,
        "no-unused-expressions": 2,
        "no-unused-labels": 2,
        "no-unused-vars": 2,
        "no-use-before-define": [2, "nofunc"],
        "no-useless-call": 2,
        "no-useless-concat": 2,
        "no-useless-constructor": 2,
        "no-var": 2,
        "no-void": 2,
        "no-whitespace-before-property": 2,
        "no-with": 2,
        "object-curly-spacing": 2,
        "object-shorthand": 2,
        "one-var": [2, {"initialized": "never", "uninitialized": "always"}],
        "operator-linebreak": [2, "after", {"overrides": {"?": "ignore", ":": "ignore"}}],
        "padded-blocks": [2, "never"],
        "prefer-arrow-callback": 2,
        "prefer-const": 2,
        "prefer-rest-params": 2,
        "prefer-spread": 2,
        "prefer-template": 2,
        "quote-props": [2, "consistent-as-needed"],
        "quotes": [2, "double", "avoid-escape"],
        "radix": 2,
        "require-jsdoc": 2,
        "require-yield": 2,
        "semi": 2,
        "semi-spacing": 2,
        "space-before-blocks": 2,
        "space-before-function-paren": [2, "never"],
        "space-in-parens": 2,
        "space-infix-ops": 2,
        "space-unary-ops": 2,
        "spaced-comment": [2, "always", {"exceptions": ["-", "="]}],
        "strict": [2, "global"],
        "template-curly-spacing": 2,
        "use-isnan": 2,
        "valid-jsdoc": [2, {
            "requireReturn": true,
            "prefer": {
                "return": "returns"
            },
            "preferType": {
                "Boolean": "boolean",
                "Number": "number",
                "String": "string",
                "Object": "object",
                "Symbol": "symbol",
                "Function": "function"
            }
        }],
        "valid-typeof": 2,
        "wrap-iife": [2, "inside"],
        "yield-star-spacing": [2, "after"],
        "yoda": [2, "never", {"exceptRange": true}],

        "complexity": [1, 12],
        "max-params": [1, 6],

        "arrow-parens": 0,                  // Use "mysticatea/arrow-parens"
        "block-scoped-var": 0,              // Use "mysticatea/block-scoped-var"
        "callback-return": 0,               // Under consideration...
        "consistent-this": 0,               // Meaningless, IMO.
        "func-names": 0,                    // This is noisy for co.js
        "global-require": 0,                // I'm sometimes using conditional require.
        "guard-for-in": 0,                  // I prefer `Object.create(null)`.
        "handle-callback-err": 0,           // Under consideration...
        "id-blacklist": 0,                  //
        "id-length": 0,                     //
        "id-match": 0,                      //
        "lines-around-comment": 0,          // Under consideration...
        "max-depth": 0,                     //
        "max-len": 0,                       //
        "max-statements": 0,                //
        "newline-after-var": 0,             // Case by case.
        "newline-per-chained-call": 0,      // Case by case.
        "no-bitwise": 0,                    // I'm familiar with bitwise ops.
        "no-confusing-arrow": 0,            // This is very noisy.
        "no-continue": 0,                   // I like fast return.
        "no-eq-null": 0,                    // I like eq null.
        "no-inline-comments": 0,            // This is an inline comment.
        "no-inner-declarations": 0,         // This is allowed on ES6+
        "no-labels": 0,                     //
        "no-magic-numbers": 0,              //
        "no-mixed-requires": 0,             // I'm using "on-ver" never.
        "no-multi-str": 0,                  // This is allowed on ES5+
        "no-negated-condition": 0,          // Case by case.
        "no-nested-ternary": 0,             // I like it.
        "no-new-func": 0,                   // I like it.
        "no-path-concat": 0,                // Under consideration...
        "no-plusplus": 0,                   // I often use it.
        "no-proto": 0,                      // This is allowed on ES6+
        "no-restricted-imports": 0,         //
        "no-restricted-modules": 0,         //
        "no-restricted-syntax": 0,          //
        "no-sync": 0,                       // This is useful on CLI tools.
        "no-ternary": 0,                    // I like it.
        "no-undefined": 0,                  // This is safe on strict mode.
        "no-warning-comments": 0,           //
        "one-var-declaration-per-line": 0,  // Use one-var
        "operator-assignment": 0,           //
        "prefer-reflect": 0,                // Too early, IMO
        "sort-imports": 0,                  //
        "sort-vars": 0,                     //
        "vars-on-top": 0,                   // I hate this.
        "wrap-regex": 0,                    //

        "mysticatea/arrow-parens": 2,
        "mysticatea/block-scoped-var": 0    // Use on ES5 environment only.
    }
};
