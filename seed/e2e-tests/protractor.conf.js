exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  getPageTimeout: 60000,
  allScriptsTimeout: 50000,

  framework: 'custom',
  frameworkPath: require.resolve('../node_modules/protractor-cucumber-framework/'),

  capabilities: {
    'browserName': 'chrome'
  },
  specs: [
    './features/*.feature'
  ],

  baseUrl: 'http://localhost:3000',

  cucumberOpts: {
    require: './features/step_definitions/*.js',
    tags: false, // [ 'badInput']
    format: ['node_modules/cucumber-pretty', 'json:feature.test.json'], //['JUnit', 'progress', 'summary','usage'],
    profile: false,
    'no-source': true
  }
};
