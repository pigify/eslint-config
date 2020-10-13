const { CLIEngine } = require('eslint');
const appRoot = require('app-root-path');
const debug = require('debug')('pigify/eslint');
const fs = require('fs');
const stringify = require("json-stable-stringify-without-jsonify");
const baseConfig = require('../index');

let contentForWrite;
const stringifiedInitialConfig = `module.exports = ${stringify({
  extends: ['pigify'],
  rules: {}
}, { space: 2 })}`;

/**
 * Generate .eslintrc file in project root directory
 */
const generateESLintRc = () => {
  debug("Generating .eslintrc config file");

  try {
    const linter = new CLIEngine({
      baseConfig,
      fix: true,
      useEslintrc: false
    });

    const linterResult = linter.executeOnText(stringifiedInitialConfig);
    contentForWrite = linterResult.results[0].output || stringifiedInitialConfig;
  } catch (e) {
    debug("File .eslintrc may be unlinted");

    contentForWrite = stringifiedInitialConfig;
    throw e;
  } finally {
    debug("Saving .eslintrc in project root");

    fs.writeFileSync(`${appRoot}/.eslintrc.js`, contentForWrite);
  }
};

/**
 * Generate .eslintignore file in project root directory
 */
const generateESLintIgnore = () => {
  debug("Generating .eslintignore config file");

  try {
    debug("Saving .eslintignore in project root");

    fs.writeFileSync(`${appRoot}/.eslintignore`, '!.eslintrc.js\n./src/serviceWorker.js');
  } catch (e) {
    debug("File .eslintrc may be unlinted");

    contentForWrite = stringifiedInitialConfig;
    throw e;
  }
};

generateESLintRc();
generateESLintIgnore();
