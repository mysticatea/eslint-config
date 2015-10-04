module.exports = {
    "plugins": [
        "mysticatea"
    ],

    "ecmaFeatures": {
        "arrowFunctions": true,
        "binaryLiterals": true,
        "blockBindings": true,
        "classes": true,
        "defaultParams": true,
        "destructuring": true,
        "forOf": true,
        "generators": true,
        "modules": true,
        "newTarget": true,
        "objectLiteralComputedProperties": true,
        "objectLiteralDuplicateProperties": true,
        "objectLiteralShorthandMethods": true,
        "objectLiteralShorthandProperties": true,
        "octalLiterals": true,
        "regexUFlag": true,
        "regexYFlag": true,
        "restParams": true,
        "spread": true,
        "superInFunctions": false,
        "templateStrings": true,
        "unicodeCodePointEscapes": true
    },

    "rules": {
        // Possible Errors Section
        "comma-dangle": 2,
        "no-cond-assign": 2,
        "no-console": 1, // Useful to debug.
        "no-constant-condition": 2,
        "no-control-regex": 2,
        "no-debugger": 2,
        "no-dupe-args": 2,
        "no-dupe-keys": 2,
        "no-duplicate-case": 2,
        "no-empty-character-class": 2,
        "no-empty": 2,
        "no-ex-assign": 2,
        "no-extra-boolean-cast": 0, // I use no-implicit-coercion
        "no-extra-parens": [2, "functions"],
        "no-extra-semi": 2,
        "no-func-assign": 2,
        "no-inner-declarations": 0, // function declarations are block-scoped in ES2015 or later.
        "no-invalid-regexp": 2,
        "no-irregular-whitespace": 2,
        "no-negated-in-lhs": 2,
        "no-obj-calls": 2,
        "no-regex-spaces": 2,
        "no-sparse-arrays": 2,
        "no-unexpected-multiline": 0, // I prefer semicolons.
        "no-unreachable": 2,
        "use-isnan": 2,
        "valid-jsdoc": [2, {"requireReturn": false}],
        "valid-typeof": 2,

        // Best Practices Section
        "accessor-pairs": 2,
        "block-scoped-var": 0, // Use let/const.
        "complexity": [1, 8],
        "consistent-return": 2,
        "curly": 2,
        "default-case": 2,
        "dot-notation": 2,
        "dot-location": [2, "property"],
        "eqeqeq": [2, "allow-null"],
        "guard-for-in": 0, // I like using Object.create(null)
        "no-alert": 2,
        "no-caller": 2,
        "no-div-regex": 2,
        "no-else-return": 2,
        "no-empty-label": 2,
        "no-eq-null": 0, // I like it.
        "no-eval": 2,
        "no-extend-native": 2,
        "no-extra-bind": 2,
        "no-fallthrough": 2,
        "no-floating-decimal": 2,
        "no-implied-eval": 2,
        "no-implicit-coercion": 2,
        "no-invalid-this": 2,
        "no-iterator": 2,
        "no-labels": 2,
        "no-lone-blocks": 2,
        "no-loop-func": 2,
        "no-multi-spaces": 2,
        "no-multi-str": 0, // It's supported in ES5 or later.
        "no-native-reassign": 2,
        "no-new-func": 0, // Function constructor is different from eval.
        "no-new-wrappers": 2,
        "no-new": 2,
        "no-octal-escape": 2,
        "no-octal": 2,
        "no-param-reassign": [2, {"props": true}],
        "no-process-env": 0, // I like envify.
        "no-proto": 0, // Allowed on ES6
        "no-redeclare": [2, {"builtinGlobals": true}],
        "no-return-assign": 2,
        "no-script-url": 2,
        "no-self-compare": 2,
        "no-sequences": 2,
        "no-throw-literal": 2,
        "no-unused-expressions": 2,
        "no-useless-call": 2,
        "no-useless-concat": 2,
        "no-void": 2,
        "no-warning-comments": 0, // I want to allow if there is author name.
        "no-with": 2,
        "radix": 2,
        "vars-on-top": 0, // Use let/const.
        "wrap-iife": [2, "inside"], // I like.
        "yoda": [2, "never", {"exceptRange": true}], // I like comparing such as `0 <= a && a < 10`.

        // Strict Mode Section
        "strict": [2, "global"],

        // Variables Section
        "init-declarations": 2,
        "no-catch-shadow": 2,
        "no-delete-var": 2,
        "no-label-var": 2,
        "no-shadow-restricted-names": 2,
        "no-shadow": 2,
        "no-undef-init": 2,
        "no-undef": [2, {"typeof": true}],
        "no-undefined": 0,
        "no-unused-vars": 2,
        "no-use-before-define": [2, "nofunc"], // I know hoisting.

        // Node.js Section
        "callback-return": 0,
        "global-require": 0,
        "handle-callback-err": 0,
        "no-mixed-requires": 0,
        "no-new-require": 0,
        "no-path-concat": 0,
        "no-process-exit": 0,
        "no-restricted-modules": 0,
        "no-sync": 0,

        // Stylistic Issues Section
        "array-bracket-spacing": 2,
        "block-spacing": 2,
        "brace-style": [2, "stroustrup", {"allowSingleLine": true}],
        "camelcase": 2,
        "comma-spacing": 2,
        "comma-style": 2,
        "computed-property-spacing": 2,
        "consistent-this": 0, // Favor AllowFunction or bind(this), and I like using more acculate name.
        "eol-last": 2,
        "func-names": 2,
        "func-style": [2, "declaration"],
        "id-length": 0, // I like one char variables in very small functions or callbacks.
        "id-match": 0, // To consider each project.
        "indent": [2, 4, {"SwitchCase": 1}],
        "jsx-quotes": [2, "prefer-double"],
        "key-spacing": 2,
        "lines-around-comment": [2, {"beforeBlockComment": true, "allowBlockStart": true}],
        "linebreak-style": [2, "unix"],
        "max-nested-callbacks": [2, 3],
        "new-cap": 2,
        "new-parens": 2,
        "newline-after-var": 0, // Case by case.
        "no-array-constructor": 2,
        "no-continue": 0, // I like it.
        "no-inline-comments": 0, // I don't think I need disallow.
        "no-lonely-if": 0, // I like it.
        "no-mixed-spaces-and-tabs": 2,
        "no-multiple-empty-lines": 0, // I don't think I need disallow.
        "no-nested-ternary": 0, // I like it if together with line breaks.
        "no-negated-condition": 0, // Case by case.
        "no-new-object": 2,
        "no-restricted-syntax": 0,
        "no-spaced-func": 2,
        "no-ternary": 0, // I like it.
        "no-trailing-spaces": 2,
        "no-underscore-dangle": 0, // It often is used for private members.
        "no-unneeded-ternary": 2,
        "object-curly-spacing": 2,
        "one-var": [2, {"initialized": "never", "uninitialized": "always"}], // I like this.
        "operator-assignment": 0, // It makes no difference to me.
        "operator-linebreak": [2, "after"], // I like it.
        "padded-blocks": [2, "never"],
        "quote-props": [2, "consistent-as-needed"],
        "quotes": [2, "double", "avoid-escape"],
        "require-jsdoc": 0, // temporary.
        "semi-spacing": 2,
        "semi": 2,
        "sort-vars": 0, // I don't need.
        "space-after-keywords": 2,
        "space-before-blocks": 2,
        "space-before-function-paren": [2, "never"],
        "space-before-keywords": 2,
        "space-in-parens": 2,
        "space-infix-ops": 2,
        "space-return-throw-case": 2,
        "space-unary-ops": 2,
        "spaced-comment": [2, "always", {"exceptions": ["-", "="]}],
        "wrap-regex": 0, // I don't need.

        // ECMAScript 6 Section
        "arrow-parens": 0, // `mysticatea/arrow-parens` instead.
        "arrow-spacing": 2,
        "constructor-super": 2,
        "generator-star-spacing": [2, "after"],
        "no-class-assign": 2,
        "no-const-assign": 2,
        "no-dupe-class-members": 2,
        "no-this-before-super": 2,
        "no-var": 2,
        "object-shorthand": 2,
        "prefer-arrow-callback": 2,
        "prefer-const": 2,
        "prefer-reflect": 0, // I thought too early.
        "prefer-spread": 2,
        "prefer-template": 2,
        "require-yield": 2,

        // My plugin.
        "mysticatea/arrow-parens": 2,
        "mysticatea/block-scoped-var": 0, // Use let/const.

        // Legacy
        "max-depth": 0,
        "max-len": 0,
        "max-params": 0,
        "max-statements": 0,
        "no-bitwise": 0,
        "no-plusplus": 0
    }
};
