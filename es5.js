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
    // Best Practices Section
    "no-proto": 2,

    // ECMAScript 6 Section
    "generator-star-spacing": 0,
    "no-var": 0,
    "object-shorthand": 0,
    "prefer-const": 0
  }
});
