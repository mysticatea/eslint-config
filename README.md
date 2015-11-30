# eslint-config-mysticatea

Shareable configurations of ESLint for me.

Please see [base.js](./base.js) to check rules.
Basically rules are enabled and rules I wanted to disable are commented in the file.

This config's version is adjusting to ESLint's.
And the pre-release version shows config's version.

e.g. `1.10.0-1.0.0` is the first version for ESLint `v1.10.x`.

## Installation

```
npm install --save-dev eslint-config-mysticatea
```

**Node:** Please use `npm>=3`.

## Usage

First, please choose a base template.

- `mysticatea` - A rule set for ECMAScript 2015 (ES6).
- `mysticatea/es5` - A rule set for ES5.

Second, please choose a optional template and add it.

- `mysticatea/browser` - An additional setting for browser environment.
- `mysticatea/modules` - An additional setting for ECMAScript 2015 Modules enviroment.
- `mysticatea/node` - An additional setting for Node.js environment.
- `mysticatea/react` - An additional setting for React.js environment.

Then, please write those into `extends` field.

### Examples

- Node.js with ES5

  ```json
  {
      "extends": ["mysticatea/es5", "mysticatea/node"]
  }
  ```

- Node.js with ES2015

  ```json
  {
      "extends": ["mysticatea", "mysticatea/node"]
  }
  ```

- Node.js with ES2015 & Modules

  ```json
  {
      "extends": ["mysticatea", "mysticatea/modules", "mysticatea/node"]
  }
  ```

- Browser with ES2015

  ```json
  {
      "extends": ["mysticatea", "mysticatea/browser"]
  }
  ```

- React.js in browser

  ```json
  {
      "extends": ["mysticatea", "mysticatea/browser", "mysticatea/react"]
  }
  ```

## Test

There is a script to check whether or not there are added/removed rules.

On this repo:

```
npm test
```
