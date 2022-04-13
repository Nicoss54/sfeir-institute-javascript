module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@nrwl/nx', 'prettier'],
  extends: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
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
