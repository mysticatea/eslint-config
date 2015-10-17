var extend = require("./lib/extend");
var base = require("./base");

module.exports = extend(base, {
    "ecmaFeatures": {
        "arrowFunctions": false,
        "binaryLiterals": false,
        "blockBindings": false,
        "classes": false,
        "defaultParams": false,
        "destructuring": false,
        "forOf": false,
        "generators": false,
        "modules": false,
        "newTarget": false,
        "objectLiteralComputedProperties": false,
        "objectLiteralDuplicateProperties": false,
        "objectLiteralShorthandMethods": false,
        "objectLiteralShorthandProperties": false,
        "octalLiterals": false,
        "regexUFlag": false,
        "regexYFlag": false,
        "restParams": false,
        "spread": false,
        "superInFunctions": false,
        "templateStrings": false,
        "unicodeCodePointEscapes": false
    },

    "rules": {
        // Possible Errors Section
        "no-inner-declarations": [2, "functions"], // syntax-error in ES5

        // Best Practices Section
        "no-proto": 2,
        "no-redeclare": 0, // `mysticatea/block-scoped-var` instead.

        // Stylistic Issues Section
        "func-names": 0,

        // ECMAScript 6 Section
        "arrow-parens": 0,
        "arrow-spacing": 0,
        "constructor-super": 0,
        "generator-star-spacing": 0,
        "no-class-assign": 0,
        "no-const-assign": 0,
        "no-dupe-class-members": 0,
        "no-empty-pattern": 0,
        "no-this-before-super": 0,
        "no-var": 0,
        "object-shorthand": 0,
        "prefer-arrow-callback": 0,
        "prefer-const": 0,
        "prefer-reflect": 0,
        "prefer-spread": 0,
        "prefer-template": 0,
        "require-yield": 0,

        // My plugin.
        "mysticatea/arrow-parens": 0,
        "mysticatea/block-scoped-var": 2,
    }
});
