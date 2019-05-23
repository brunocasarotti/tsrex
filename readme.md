# TSREX

### <b>T</b>ype<b>S</b>cript <b>R</b>eact <b>EX</b>Redux

This package contains the following modules:

- Typescript 3
- React 16
- ExRedux (Redux abstraction with Decorators)
- Jest 24 + Enzyme 3 (for tests)

The builder has the following module bundlers:

- Webpack 4
- Babel 7
- babel-jest (for tests)

## Install

```bash
# install TSREX
npm i -S tsrex
```

## Setup tsconfig and tslint

Extend base tsconfig.json from TSREX folder:

```json
{
  "extends": "./node_modules/tsrex/tsconfig.json",
  "compilerOptions": {
    ...
  }
}
```

Same for tslint.json:

```json
{
  "extends": "./node_modules/tsrex/tslint.json",
  ...
}
```

## Setup the script configuration

Create a js file as example below to setup the scrips command:

Ex.: _react.config.js_

```js
{
  module.exports = {
    // source of files
    source: 'src',
    // output path
    outputPath: 'dist',
    // port to be used in development
    // will be set in webpack-dev-server
    port: 8080,
    // hostname to be used in development
    // will be set in webpack-dev-server
    host: 'localhost',
    // all enviroments to be set in process.env
    nodeEnv: {
      commentsExample: 'Comment from Node Enviroments',
      booleanValueExample: true,
      numericValueExample: 37,
    },
    // all enviroments to be set in HTMLWebpackPlugin
    // available in HTML thru <%= htmlWebpackPlugin.options.propertyName %>
    htmlEnv: {
      htmlComments: 'Comment from HTML Enviroment',
    },
  };
}
```

## Using scripts

TSREX have four methods to be used in scripts of the package.json.

Is better to set unique config file for each method:

```json
{
  "scripts": {
    "start": "tsrex start ./react.config.js",
    "build": "tsrex build ./react.config.prod.js",
    "test": "tsrex test ./react.config.test.js",
    "lib": "tsrex library ./react.config.lib.js"
  }
}
```

## Jest customization

In case, if your tests require specific Jest configuration, include jest property in your _react.config.test.js_:

```js
module.exports = {
  source: 'application',
  outputPath: '',
  nodeEnv: {},
  htmlEnv: {},
  port: 0,
  hostname: '',
  jest: {
    coverageThreshold: {
      global: {
        branches: 50,
        functions: 50,
        lines: 50
      }
    },
    moduleNameMapper: {
      "@components/(.*)": "<rootDir>/src/components/$1",
      "@containers/(.*)": "<rootDir>/src/containers/$1",
      "@interfaces/(.*)": "<rootDir>/src/interfaces/$1",
      "@services/(.*)": "<rootDir>/src/services/$1",
    },
    updateSnapshot: true
  }
};
```