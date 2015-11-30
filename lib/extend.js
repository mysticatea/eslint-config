/**
 * @author Toru Nagashima
 * @copyright 2015 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict";

var assign = require("object-assign");
var pushAll = Function.apply.bind(Array.prototype.push);

module.exports = function() {
    var retv = {};

    for (var i = 0, end = arguments.length; i < end; ++i) {
        var source = arguments[i];

        // extends
        if (source.extends != null) {
            if (retv.extends == null) {
                retv.extends = [];
            }
            pushAll(
                retv.extends,
                Array.isArray(source.extends) ? source.extends : [source.extends]);
        }

        // parser
        if (source.parser != null) {
            retv.parser = source.parser;
        }

        // plugins
        if (source.plugins != null) {
            if (retv.plugins == null) {
                retv.plugins = [];
            }
            pushAll(retv.plugins, source.plugins);
        }

        // ecmaFeatures
        if (source.ecmaFeatures != null) {
            retv.ecmaFeatures = assign(retv.ecmaFeatures || {}, source.ecmaFeatures);
        }

        // env
        if (source.env != null) {
            retv.env = assign(retv.env || {}, source.env);
        }

        // globals
        if (source.globals != null) {
            retv.globals = assign(retv.globals || {}, source.globals);
        }

        // rules
        if (source.rules != null) {
            retv.rules = assign(retv.rules || {}, source.rules);
        }
    }

    return retv;
};
