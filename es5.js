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
    "no-inner-declarations": [2, "functions"],

    // Best Practices Section
    "no-proto": 2,

    // Stylistic Issues Section
    "func-names": 0,

    // ECMAScript 6 Section
    "constructor-super": 0,
    "generator-star-spacing": 0,
    "no-this-before-super": 0,
    "no-var": 0,
    "object-shorthand": 0,
    "prefer-const": 0
  }
});
