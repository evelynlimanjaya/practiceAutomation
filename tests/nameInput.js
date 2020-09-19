module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:3000/')
    },
    after: browser => {
        browser.end()
    },
    'Name input test': browser => {
        browser
            .click('li[name="employee1"]')
            .pause(30000)
            .click('input[name="nameEntry"]')
            .pause(30000)
            .clearValue('input[name="nameEntry"]')
            .pause(30000)
            .setValue('input[name="nameEntry"]','John Doe')
            .pause(30000)
            .click('#saveBtn')
            .pause(30000)

    }
}