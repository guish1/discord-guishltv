module.exports = {
  // Tell eslint not to seek a eslintrc file in parent folders.
  root: true,

  env: {
    es6: true,
    jest: true,
  },

  extends: 'airbnb-base',

  rules: {
    // Allow ++ operator.
    'no-plusplus': 'off',

    // Allow named export without default export.
    'import/prefer-default-export': 'off',

    // On linebreak, enforce operator on the new line.
    'operator-linebreak': ['error', 'before'],

    // Prevent multiple empty lines. Allow 1 at EOF, 0 at BOF.
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 1,
        maxBOF: 0,
      },
    ],

    // Enforce single quotes except for strings with single quotes in body.
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ],

    // Allow assigning in argument if object.
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
  },

  overrides: [
    {
      files: [
        '.{jest}/**/*.js',
      ],
      rules: {
        // Allow importing dev dependencies in test files.
        'import/no-extraneous-dependencies': [
          'error',
          { devDependencies: true },
        ],
      },
    },
    {
      files: [
        '__mocks__/**/*.js',
      ],
      rules: {
        'max-classes-per-file': 'off',
        'class-methods-use-this': 'off',
      },
    },
  ],
};
