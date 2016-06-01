# eslint-config-mysticatea

[![npm version](https://img.shields.io/npm/v/eslint-config-mysticatea.svg)](https://www.npmjs.com/package/eslint-config-mysticatea)
[![Downloads/month](https://img.shields.io/npm/dm/eslint-config-mysticatea.svg)](https://www.npmjs.com/package/eslint-config-mysticatea)
[![Build Status](https://travis-ci.org/mysticatea/eslint-config.svg?branch=master)](https://travis-ci.org/mysticatea/eslint-config)
[![Dependency Status](https://david-dm.org/mysticatea/eslint-config.svg)](https://david-dm.org/mysticatea/eslint-config)

Shareable configurations of ESLint for me.

There is basic configuration at [base.js](./base.js).

## Installation

```
npm install --save-dev eslint-config-mysticatea
```

## Usage

First, please choose a base template.

- `mysticatea` - A rule set for ECMAScript 2015 (ES6).
- `mysticatea/es5` - A rule set for ES5.

Second, please choose a optional template and add it.

- `mysticatea/browser` - An additional setting for browser environment.
- `mysticatea/mocha` - An additional setting for mocha environment.
- `mysticatea/modules` - An additional setting for ECMAScript 2015 Modules enviroment.
- `mysticatea/node` - An additional setting for Node.js environment.

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

  In this case, `engines` field of `package.json` is needed to specify the version of Node.

- Node.js with ES2015 & Modules

  ```json
  {
      "extends": ["mysticatea", "mysticatea/modules", "mysticatea/node"]
  }
  ```

  In this case, `engines` field of `package.json` is needed to specify the version of Node.
  Or just turn `node/no-unsupported-features` off.

- Browser with ES2015

  ```json
  {
      "extends": ["mysticatea", "mysticatea/browser"]
  }
  ```

## Test

There is a script to check whether or not there are added/removed rules.

On this repo:

```
npm test
```
