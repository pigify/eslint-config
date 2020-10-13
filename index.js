module.exports = {
  env: {
    browser: true
  },
  plugins: ['react', 'prettier'],
  extends: ['airbnb', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', 'jsx']
      }
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        tabWidth: 2,
        printWidth: 120
      }
    ],
    'max-len': ['error', { code: 120 }],
    'no-console': 'off',
    'array-callback-return': 'off',
    'consistent-return': 'off',
    'import/no-unresolved': 'off',
    'import/no-duplicate': 'off',
    'import/no-named-as-default': 'off',
    'import/extensions': ['off', 'never'],
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'off',
    'no-unused-expressions': 'off',
    'react/no-array-index-key': 'off',
    'react/prop-types': 'off',
    'react/button-has-type': 'off',
    'prefer-default-export': 'off',
    'react/self-closing-comp': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/forbid-prop-types': [0],
    'import/no-cycle': [2, { maxDepth: 1 }],
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/mouse-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off'
  }
};
