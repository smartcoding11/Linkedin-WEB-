module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-floating-promises': 'error',
    'no-console': ['error', { allow: ['warn', 'error'] }],
  },
  overrides: [
    {
      files: ['tests/**/*.spec.ts'],
      rules: {
        'no-restricted-imports': [
          'error',
          {
            patterns: [
              { group: ['@screens/*', 'webdriverio'], message: 'Tests must import from @flows and @fixtures only.' },
            ],
          },
        ],
        'no-restricted-syntax': [
          'error',
          { selector: "CallExpression[callee.object.name='browser'][callee.property.name='pause']", message: 'Hardcoded waits forbidden.' },
        ],
      },
    },
  ],
  ignorePatterns: ['node_modules', 'dist', 'allure-results', 'allure-report', '*.js', '*.cjs'],
};