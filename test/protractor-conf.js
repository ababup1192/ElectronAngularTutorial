exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    'e2e/*.js'
  ],

  directConnect: true,

  capabilities: {
     browserName: 'chrome',
     chromeOptions: {
      binary: '/Applications/Atom.app/Contents/MacOS/Atom',
      args: ["--test-type=webdriver"]
     }
  },

  // chromeOnly: true,

  // baseUrl: '../../build/index.html',
  seleniumAddress: 'http://localhost:9515/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
     isVerbose: true
  }
};
