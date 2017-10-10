// Karma configuration
// Generated on Thu Sep 21 2017 14:52:36 GMT-0700 (Pacific Daylight Time)

module.exports = function (config) {

  var configOptions = {


    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: 'app/',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'sinon-chai', 'chai'],

    client: {
      mocha: {
        reporter: 'spec',
        ui: 'bdd-lazy-var/global',
        require: [require.resolve('bdd-lazy-var/bdd_lazy_var_global')]
      },
      chai: {
        includeStack: true
      }
    },

    // list of files / patterns to load in the browser
    files: [
      '../node_modules/angular/angular.js',
      '../node_modules/angular-mocks/angular-mocks.js',
      '../node_modules/lodash/lodash.js',

      // load module definitions first.
      '**/*.module.js',

      '**/*.js',

      {pattern: '**/*.html', included: true}

    ],


    // list of files to exclude
    exclude: [],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      '**/*.html': ['ng-html2js'],
      '**/!(*.spec).js': ['coverage']
    },

    ngHtml2JsPreprocessor: {
      stripPrefix: 'app/',
      moduleName: 'templates'
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: [
      //'progress',
      'spec',
      'coverage',
      'failed'
    ],

    specReporter: {
      maxLogLines: 5,         // limit number of lines logged per test
      suppressErrorSummary: false,  // do not print error summary
      suppressFailed: false,  // do not print information about failed tests
      suppressPassed: false,  // do not print information about passed tests
      suppressSkipped: true,  // do not print information about skipped tests
      showSpecTiming: true    // print the time elapsed for each spec
    },

    coverageReporter: {
      //  type: 'html',
      //  dir: 'test-reports/coverage/',
      //  file: 'coverage.html'
      type: 'cobertura',
      dir: '../test-reports/coverage/',
      reporters: [
        {type: 'html', subdir: 'istanbul-html-report'},
        {type: 'cobertura', subdir: '.', file: 'istanbul.junit.xml'},
        {type: 'json', subdir: '.', file: 'istanbul.json'}
      ],
      instrumenterOptions: {
        istanbul: {noCompact: true}
      },
      check: {
        global: {
          // statements: 47,
          // lines: 47,
          // functions: 45,
          // branches: 28
        }
      }

    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    customLaunchers: {
      ChromeHeadless: {
        base: 'Chrome',
        flags: [
          '--no-sandbox',
          // See https://chromium.googlesource.com/chromium/src/+/lkgr/headless/README.md
          '--headless',
          '--disable-gpu',
          // Without a remote debugging port, Google Chrome exits immediately.
          ' --remote-debugging-port=9222'
        ]
      }
    },

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    // browsers: ['Chrome', 'Firefox', 'IE'],
    browsers: ['ChromeHeadless'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  };


  config.set(configOptions);

};
