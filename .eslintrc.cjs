module.exports = {
  root: true,
  env: { browser: true, node: true, es2022: true },
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['@typescript-eslint'],
  rules: {
    // The TypeScript-aware equivalent does not mistake type signatures for bindings.
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
  },
  extends: ['eslint:recommended'],
};
