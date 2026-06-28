module.exports = {
  default: {
   // paths: ["features/**/*.feature"],
    require: [
      "features/stepDefinitions/**/*.js",
      "features/support/**/*.js"
    ],
    format: ["progress"],
    publishQuiet: true
  }
};
