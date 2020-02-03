const ignorePatterns = [
  '/node_modules/',
  '<rootDir>/.stryker-tmp/',
]

module.exports = {
  collectCoverage: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: ignorePatterns,
  coverageReporters: ['json', 'lcovonly', 'text', 'clover'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  errorOnDeprecated: true,
  moduleDirectories: [
    "node_modules"
  ],
  moduleFileExtensions: ["js"],
  notify: true,
  roots: ['<rootDir>'],
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  testPathIgnorePatterns: ignorePatterns,
  transform: {
    '^.+\\.[t|j]sx?$': ['babel-jest'],
  },
  transformIgnorePatterns: ignorePatterns,
  watchman: true
};
