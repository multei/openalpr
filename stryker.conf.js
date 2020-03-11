/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  coverageAnalysis: "off",
  mutator: "javascript",
  packageManager: "npm",
  reporters: ["html", "clear-text", "progress", "dashboard"],
  testRunner: "jest",
  transpilers: [],
};
