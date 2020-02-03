module.exports = function(config) {
  config.set({
    coverageAnalysis: "off",
    mutator: "javascript",
    packageManager: "npm",
    reporters: ["html", "clear-text", "progress", "dashboard"],
    transpilers: []
  });
};
