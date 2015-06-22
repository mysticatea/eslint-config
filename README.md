# eslint-config-mysticatea

Shareable configurations of ESLint for me.

## Installation

```
npm install -D eslint eslint-config-mysticatea
```

## Rule Templates

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

This rule requires `eslint-plugin-react` also.

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
