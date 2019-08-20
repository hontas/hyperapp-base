module.exports = {
  extends: ['eslint:recommended', 'airbnb-base', 'prettier'],
  plugins: ['import', 'react'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'no-use-before-define': ['error', { functions: false }],
    'no-unused-vars': [2, { varsIgnorePattern: 'h' }],
    'react/jsx-uses-vars': 2
  },
  env: {
    browser: true
  }
};
