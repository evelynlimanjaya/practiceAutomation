module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:3000/')
    },
    after: browser => {
        browser.end()
    },
    'Empty field test': browser => {
        browser
            .click('li[name="employee1"]')
            .pause(3000)
            .clearValue('input[name="nameEntry"]')
            .pause(3000)
            .clearValue('input[name="phoneEntry"]')
            .pause(3000)
            .clearValue('input[name="titleEntry"]')
            .pause(3000)
            .click('#saveBtn')
            .pause(30000)

    }
}