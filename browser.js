var extend = require("./lib/extend");
var base = require("./base");

module.exports = extend(base, {
  "env": {
    "browser": true
  }
});
