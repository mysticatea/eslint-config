# eslint-config-mysticatea

**This package was deprecated.** Please use [@mysticatea/eslint-plugin](https://github.com/mysticatea/eslint-plugin) instead.

Shareable configurations of ESLint.

There is basic configuration at [base.js](./base.js).

## 💿 Installation

```
npm install --save-dev eslint eslint-config-mysticatea
```

### Requirements

- Node.js `^4.0.0`, `^6.0.0`, `^8.0.0`, or newer.
- ESLint `^4.14.0`, or newer.

## 📖 Usage

Write in your ESLint configurations: http://eslint.org/docs/user-guide/configuring#using-the-configuration-from-a-plugin

**First, please choose a base template.**

- `mysticatea` - A rule set for ECMAScript 2017.
- `mysticatea/es5` - A rule set for ECMAScript 5.

**Second, please choose a optional template and add it.**

- `mysticatea/browser` - An additional setting for browser environment.
- `mysticatea/mocha` - An additional setting for mocha environment.
- `mysticatea/modules` - An additional setting for ES Modules enviroment.
- `mysticatea/node` - An additional setting for Node.js environment.
- `mysticatea/vue` - An additional setting for Vue.js environment. This setting includes `mysticatea/browser` and `mysticatea/modules`.

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
