# eslint-config-mysticatea

Shareable configurations of ESLint for me.

Please see [base.js](./base.js) to check rules.
Basically rules are enabled and rules I wanted to disable are commented in the file.

Note: This module does **not** have semver. This version has been adjusted to ESLint's.

## Installation

```
npm install --save-dev eslint eslint-plugin-mysticatea eslint-config-mysticatea
```

## Rule Templates

All templates requires `eslint-plugin-mysticatea`.

### base

```js
{
    "extends": "mysticatea"
}
```

### browser

```js
{
    "extends": "mysticatea/browser"
}
```

### nodejs

```js
{
    "extends": "mysticatea/nodejs"
}
```

### react

```js
{
    "extends": "mysticatea/react"
}
```

This template requires `eslint-plugin-react` also.

### es5

```js
{
    "extends": "mysticatea/es5"
}
```

## Test

There is a script to check whether or not there are added/removed rules.

On this repo:

```
npm test
```
