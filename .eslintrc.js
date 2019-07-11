module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: 'eslint:recommended',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018
  },
  plugins: ['react'],
  rules: {
    'no-unused-vars': 2,
    'no-undef': 2
  }
};
