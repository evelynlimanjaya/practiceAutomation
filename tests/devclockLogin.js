module.exports = {
    before: browser=>{
        browser.url('https://cards-beta.devclock.com/login')
    },
    after: browser=>{
        browser.end()
    },
    'Can log in with an existing account': browser=>{
        browser
            .setValue('input[type="email"]', 'test@devmtnqa.com')
            .setValue('input[type="password"]', 'testpass')
            .useXpath()
            .click('//button[contains(@data-bind, "login")]')
            .expect.element('//div[contains(@data-bind, "logout")]').to.be.visible.before(5000)
    }

}