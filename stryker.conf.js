module.exports = function(config) {
  config.set({
    coverageAnalysis: "off",
    jest: {},
    mutate: ["src/**/*.js"],
    mutator: "javascript",
    packageManager: "npm",
    reporters: ["html", "clear-text", "progress"],
    transpilers: []
  });
};
