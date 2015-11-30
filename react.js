/**
 * @author Toru Nagashima
 * @copyright 2015 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict";

module.exports = {
    "plugins": ["react"],
    "ecmaFeatures": {"jsx": true},
    "rules": {
        "react/display-name": 2,
        "react/forbid-prop-types": 2,
        "react/jsx-boolean-value": 2,
        "react/jsx-closing-bracket-location": 2,
        "react/jsx-curly-spacing": 2,
        "react/jsx-handler-names": 2,
        "react/jsx-indent-props": 2,
        "react/jsx-key": 2,
        "react/jsx-max-props-per-line": 2,
        "react/jsx-no-bind": 2,
        "react/jsx-no-duplicate-props": 2,
        "react/jsx-no-literals": 2,
        "react/jsx-no-undef": 2,
        "react/jsx-pascal-case": 2,
        "react/jsx-quotes": 0,          // deprecated.
        "react/jsx-sort-prop-types": 0, // I like to sort by meaning.
        "react/jsx-sort-props": 0,      // I like to sort by meaning.
        "react/jsx-uses-react": 2,
        "react/jsx-uses-vars": 2,
        "react/no-danger": 2,
        "react/no-did-mount-set-state": 2,
        "react/no-did-update-set-state": 2,
        "react/no-direct-mutation-state": 2,
        "react/no-multi-comp": 2,
        "react/no-set-state": 2,
        "react/no-unknown-property": 2,
        "react/prefer-es6-class": 2,
        "react/prop-types": 2,
        "react/react-in-jsx-scope": 2,
        "react/require-extension": 2,
        "react/self-closing-comp": 2,
        "react/sort-comp": 2,
        "react/wrap-multilines": 0
    }
};
