module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    semi: ['error', 'always'],
    'max-lines': ['error', 120],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'no-var': 0,
    'prefer-const': 0,
    'vars-on-top': 0,
    'no-loop-func': 0,
    'func-names': 0,
    'prefer-arrow-callback': 0,
  },
};
