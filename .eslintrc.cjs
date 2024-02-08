module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react-refresh', 'react', 'react-hooks', '@typescript-eslint'],
  rules: {
<<<<<<< HEAD
=======
    'array-element-newline': [
      'error',
      {
        ArrayExpression: 'consistent',
        ArrayPattern: { minItems: 3 },
      },
    ],
>>>>>>> feat/2-1
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'never', children: 'never' },
    ],
<<<<<<< HEAD
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      }
=======
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
>>>>>>> feat/2-1
    ],
    'react-refresh/only-export-components': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/no-children-prop': 'off',
    'no-unused-expressions': 'off',
<<<<<<< HEAD
=======
    '@typescript-eslint/no-explicit-any': 'off',
>>>>>>> feat/2-1
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { ignoreRestSiblings: true }],
  },
  settings: {
    'import/external-module-folders': ['.yarn'],
  },
}
