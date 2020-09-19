module.exports = {
    beforeEach: browser => {
        browser.url('https://www.google.com/')
    },
    after: browser => {
        browser.end()
    },
    'Search test': browser => {
        browser
            .setValue('input[name="q"]',['odin sphere',browser.Keys.ENTER])
            .waitForElementVisible('#res')
            .pause(5000)
            .verify.containsText('#res','Odin Sphere')
    }

}