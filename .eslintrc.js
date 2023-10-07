module.exports = {
  root: true,
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      parser: '@typescript-eslint/parser',
      extends: [
        'prettier',
        'plugin:prettier/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
      ],
      parserOptions: {
        ecmaVersion: 2020,
        project: 'tsconfig.json',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      plugins: ['@typescript-eslint', 'prettier', 'import', 'deprecation', 'react', 'react-native', 'unused-imports'],
      rules: {
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        'import/no-unresolved': ['error', { ignore: ['.png$', '.webp$', '.jpg$', 'story-loader'] }],
        radix: ['warn', 'as-needed'],
        'react-native/no-inline-styles': 'off',
        'react/jsx-boolean-value': ['warn', 'never'],
        'deprecation/deprecation': 'warn',
        'react/prop-types': 'off',
        'react/display-name': 'off',
        'react-hooks/exhaustive-deps': 'warn',
        'unused-imports/no-unused-imports': [
          'error',
          {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            caughtErrorsIgnorePattern: '^_',
            ignoreRestSiblings: true,
          },
        ],
        'import/order': [
          'error',
          {
            alphabetize: { order: 'asc', caseInsensitive: false },
            groups: [['builtin', 'external'], 'internal', ['parent', 'sibling'], 'index'],
            pathGroups: [
              {
                pattern: '@{app,assets,atomic}{,/**}',
                group: 'internal',
              },
            ],
            pathGroupsExcludedImportTypes: [],
            'newlines-between': 'never',
          },
        ],
        'no-console': [
          'warn',
          {
            allow: [
              'debug',
              'info',
              'dirxml',
              'warn',
              'error',
              'dir',
              'time',
              'timeEnd',
              'timeLog',
              'trace',
              'assert',
              'clear',
              'count',
              'countReset',
              'group',
              'groupCollapsed',
              'groupEnd',
              'table',
              'Console',
              'markTimeline',
              'profile',
              'profileEnd',
              'timeline',
              'timelineEnd',
              'timeStamp',
              'context',
            ],
          },
        ],
        complexity: 'error',
        '@typescript-eslint/member-ordering': 'error',
        '@typescript-eslint/no-inferrable-types': 'warn',
        'prefer-spread': 'off',
        'prefer-const': 'error',
      },
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
          typescript: {
            // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
            alwaysTryTypes: true,
          },
        },
        react: {
          version: 'detect',
        },
      },
    },
    {
      files: ['*.graphql'],
      parser: '@graphql-eslint/eslint-plugin',
      plugins: ['@graphql-eslint', 'prettier'],
      extends: ['prettier', 'plugin:prettier/recommended'],
    },
  ],
};
