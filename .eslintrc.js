module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  env: {
    es2021: true,
    node: true,
  },
  overrides: [],
  plugins: ['@typescript-eslint'],
  extends: ['prettier', 'eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
  },
};
