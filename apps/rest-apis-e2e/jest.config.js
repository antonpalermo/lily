export default {
  displayName: 'rest-apis-e2e',
  preset: '../../jest.preset.js',
  globalSetup: '<rootDir>/src/support/global-setup.js',
  globalTeardown: '<rootDir>/src/support/global-teardown.js',
  setupFiles: ['<rootDir>/src/support/test-setup.js'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': [
      'babel-jest',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
      },
    ],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/rest-apis-e2e',
};
