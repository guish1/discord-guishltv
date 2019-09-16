module.exports = {
  bail: true,
  verbose: true,

  testEnvironment: 'node',

  // Do not test the node_modules.
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
  ],

  setupFiles: [
    '<rootDir>/.jest/setup.js',
  ],
};
