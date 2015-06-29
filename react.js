var extend = require("./lib/extend");
var base = require("./base");

module.exports = extend(base, {
  "plugins": ["react"],
  "ecmaFeatures": {"jsx": true},
  "env": {"browser": true},

  "rules": {
    "react/display-name": 2,
    "react/jsx-boolean-value": 2,
    "react/jsx-no-undef": 2,
    "react/jsx-quotes": [2, "double", "avoid-escape"],
    "react/jsx-sort-prop-types": 0, // I like to sort by meaning.
    "react/jsx-sort-props": 0, // I like to sort by meaning.
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/no-did-mount-set-state": 2,
    "react/no-did-update-set-state": 2,
    "react/no-multi-comp": 2,
    "react/no-unknown-property": 2,
    "react/prop-types": 2,
    "react/react-in-jsx-scope": 2,
    "react/require-extension": 2,
    "react/self-closing-comp": 2,
    "react/sort-comp": 2,
    "react/wrap-multilines": 2
  }
});
