var extend = require("./lib/extend");
var base = require("./base");

module.exports = extend(base, {
    "env": {
        "node": true
    },
    "rules": {
        "callback-return": 2,
        "global-require": 0, // I'm using ES6 modules. So if `require()` is needed, it's not global.
        "handle-callback-err": 2,
        "no-mixed-requires": 2,
        "no-new-require": 2,
        "no-path-concat": 2,
        "no-process-exit": 2,
        "no-restricted-modules": 0,
        "no-sync": 0
    }
});
