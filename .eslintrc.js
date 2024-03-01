module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:i18next/recommended',
    'plugin:storybook/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',
    'react-hooks',
    'yantsev1ch-plugin',
  ],
  rules: {
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'off',
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx', '.tsx'],
      },
    ],
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    'i18next/no-literal-string': [
      'error',
      {
        markupOnly: true,
        ignoreAttribute: [
          'data-testid',
          'to',
          'target',
          'src',
          'justify',
          'align',
          'border',
          'direction',
          'gap',
          'role',
          'as',
        ],
      },
    ],
    'linebreak-style': 0,
    'max-len': [
      'error',
      {
        ignoreComments: true,
        code: 150,
      },
    ],
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'no-param-reassign': 'off',
    'no-undef': 'off',
    'react/no-array-index-key': 'off',
    'yantsev1ch-plugin/path-checker': [
      'error',
      {
        alias: '@',
      },
    ],
    'yantsev1ch-plugin/public-api-imports': [
      'error',
      {
        alias: '@',
        testFilesPatterns: [
          '**/*.test.*',
          '**/*.story.*',
          '**/StoreDecorator.tsx',
        ],
      },
    ],
    'yantsev1ch-plugin/layer-imports': [
      'error',
      {
        alias: '@',
        ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
      },
    ],
    'react/jsx-max-props-per-line': ['error', { maximum: 4 }],
    'react/no-unstable-nested-components': 'warn',
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true,
  },
  overrides: [
    {
      files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
        'max-len': 'off',
      },
    },
  ],
};
