module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:3000/')
    },
    after: browser => {
        browser.end()
    },
    'Phone number test': browser => {
        browser
            .click('li[name="employee1"]')
            .pause(3000)
            .click('input[name="phoneEntry"]')
            .pause(3000)
            .clearValue('input[name="phoneEntry"]')
            .pause(3000)
            .setValue('input[name="phoneEntry"]','#####67890')
            .pause(3000)
            .click('#saveBtn')
            .pause(3000)

    }
}