module.exports={
    before:browser=>{
        browser.url('https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html')
            .waitForElementVisible('body')
    },
    after:browser=>{
        browser.end()
    },
    'Cancel button test':browser=>{
        browser
            .click('li[name="addEmployee"]')
            .click('li[name="employee11"]')
            .clearValue('input[name="nameEntry"]')
            .setValue('input[name="nameEntry"]','John Doe')
            .clearValue('input[name="phoneEntry"]')
            .setValue('input[name="phoneEntry"]','3456789765')
            .clearValue('input[name="titleEntry"]')
            .setValue('input[name="titleEntry"]','Manager')
            .click('button[name="cancel"]')
            .verify.containsText('p[name="employeeName"]','New Employee')
            .verify.containsText('li[name="employee11"]','New Employee')
            .verify.valueContains('input[name="nameEntry"]','New Employee')
            .verify.valueContains('input[name="phoneEntry"]','1234567890')
            .verify.valueContains('input[name="titleEntry"]','New Employee')
    }
}