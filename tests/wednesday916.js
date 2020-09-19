module.exports = {
    beforeEach: browser => { browser.url('https://devmountain-qa.github.io/employee-manager/1.0_Version/index.html') },
    after: browser => { browser.end() },
    // 'Problem 1': browser => {
    //     browser
    //     //this is a bug because it saves the field without clicking save button
    //         // .click('[name="employee7"]')
    //         // .clearValue('[name="nameEntry"]')
    //         // .setValue('[name="nameEntry"]', 'Billy Bob')
    //         // .click('[name="employee9"]')
    //         // .verify.value('[name="nameEntry"]', 'Eve Sparks')
    //         // .click('[name="employee7"]')
    //         // .verify.value('[name="nameEntry"]', 'Ruby Estrada')
    // },
    // 'Problem 2': browser => {
        //there is a problem with the code line 17, 26, statement chain broken, text should be value
    //     browser.click('name="employee5"')
    //         .clearValue('[name="titleEntry"]')
    //         .setValue('[name="titleEntry"]', 'Best Manager Ever')
    //         .clearValue('[name="phoneEntry"]')
    //         .setValue('[name="phoneEntry"]', '1234567890')
    //         .click('#saveBtn')
    //         .click('[name="employee8"]')
    //         .expect.element('[name="titleEntry"]').value.not.to.equal('Best Manager Ever')
    //         .click('[name="employee5"]')
    //         .expect.element('name="phoneEntry"').text.to.equal('1234567890')
    //         .expect.element('[name="titleEntry"]').text.to.equal('Best Manager Ever')
    // },
    // 'Problem 3': browser => {
    //     browser
    //         .click('[name="employee1"]')
    //         .waitForElementPresent('[name="nameEntry"]')
    //         .setValue('[name="nameEntry"]', 'New Person')
    //         .click('#saveBtn')
    //         .click('[name="employee2"]')
    //         .expect.element('[name="nameEntry"]').value.not.to.equal('New Person').before(2000)
    //     browser
    //         .click('[name="employee1"]')
    //         .expect.element('[name="nameEntry"]').value.to.equal('New Person').before(2000)
    // },
    'Problem 4': browser => {
        browser
            .click('[name="employee5"]')
            .clearValue('[name="nameEntry"]')
            .click('#saveBtn')
            .assert.containsText('.errorCard', 'The name field must be between 1 and 30 characters long.')
            .assert.value('[name="nameEntry"]', 'Dollie Berry')
    },
    // 'Problem 5': browser => {
    //     browser
    //         .click('[name="employee4"')
    //         .clearValue('[name="phoneEntry"]')
    //         .setValue('8015551234')
    //         .click('#cancelBtn')
    //         .click('[name="employee5"]')
    //         .click('[name="employee4"]')
    //         .expect.element('name="phoneEntry"]').value.not.to.equal('8015551234')

}