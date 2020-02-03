module.exports = {
  collectCoverage: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ],
  moduleDirectories: [
    "node_modules"
  ],
  moduleFileExtensions: ["js"],
  notify: true,
  testPathIgnorePatterns: [
    "/node_modules/"
  ],
  transformIgnorePatterns: [
    "/node_modules/"
  ],
  watchman: true
};
