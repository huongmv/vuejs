module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'indent': 'off',
    'no-tabs': 0,
    'no-mixed-spaces-and-tabs': 0,
    'no-irregular-whitespace': 0,
    'no-unused-vars': 'off',
    'no-undef': 'off'
  }
}
