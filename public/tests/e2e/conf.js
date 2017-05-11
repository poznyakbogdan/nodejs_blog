
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['main.js'],
  seleniumServerStartTimeout: 50000,
  port: "1000",
  allScriptsTimeout: 10000,
  getPageTimeout: 10000,
  defaultTimeoutInterval: 10000000,
  browser: ['chrome', 'firefox'],
  capabilities: {
     browserName: 'firefox',
     name: 'Unnamed Job',
     logName: 'Chrome - English',
     maxInstances: 1
  }
};