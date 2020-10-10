describe('homepage test with describe', function() {
    // All current settings are available via this.settings
    // console.log('Settings', this.settings);
  
    // testsuite specific capabilities
    // this.desiredCapabilities = {};
  
    // Enable this if the current test is a unit/integration test (i.e. no Webdriver session will be created)
    // this.unitTest = false
  
    // Set this to false if you'd like the browser window to be kept open in case of a failure or error (useful for debugging)
    // this.endSessionOnFail = true
  
    // Set this to false if you'd like the rest of the test cases/test steps to be executed in the event of an assertion failure/error
    // this.skipTestcasesOnFail = true
  
    // Set this to true if you'd like this test suite to be skipped by the test runner
    // this.disabled = false
  
    // this.retries(3);
    // this.suiteRetries(2);
  
    // Control the assertion and element commands timeout until when an element should be located or assertion passed
    // this.timeout(1000)
  
    // Controll the polling interval between re-tries for assertions or element commands
    // this.retryInterval(100);
  
    before(function(browser) {
      this.homepage = browser.page.home();
    });
  
    test('startHomepage', () => {
      this.homepage.navigate();
      this.homepage.expect.section('@indexContainer').to.be.not.visible;
    });
  
  
    // Run only this testcase
    
    test.only('startHomepage', () => {
      this.homepage.navigate();
    });
    
  
    // skipped testcase: equivalent to: test.skip(), it.skip(), and xit()
    xtest('async testcase', async browser => {
      const result = await browser.getText('#navigation');
      console.log('result', result.value)
    });
  
    test('version dropdown is enabled', browser => {
      const navigation = this.homepage.section.navigation;
      const navbarHeader = navigation.section.navbarHeader;
  
      navbarHeader.expect.element('@versionDropdown').to.be.enabled;
    });
  
    after(browser => browser.end());
  });