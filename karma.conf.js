module.exports = function(config) {
    config.set({
      frameworks: ['karma-typescript', 'mocha', 'chai'],
      files: [
        "node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js",
        { pattern: "src/**/*.ts", include: true }
      ],
      preprocessors: {
        "src/**/*.ts": "karma-typescript"
      },
      plugins: [
        'karma-typescript',
        'karma-chrome-launcher',
        'karma-mocha',
        'karma-chai'
      ],
      reporters: ['progress', 'karma-typescript'],
      karmaTypescriptConfig: {
        bundlerOptions: {
          transforms: [
              require("karma-typescript-es6-transform")()
          ]
      },
        compilerOptions: {
          target: "es5",
        },
        exclude: [
          'node_modules',
          '*_test.ts'
        ],
        coverageOptions: {
          exclude: [
            /_test\.ts$/
          ]
        }
      },
      browsers: ['ChromeHeadless'],
      singleRun: true
    });
  };