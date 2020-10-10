let manager = {}
var addEmployee=require('../testsVault/employeeManagerFunction')

module.exports = {
    beforeEach: browser => {
        manager = browser.page.employeeManagerPage()
        manager.navigate()
            .expect.element('@versionNumber').text.to.equal('Version 1.2')
    },
    after: browser => {
        browser.end()
    },
    'It can add an employee': browser => {
        addEmployee(manager,'Marnie Barnett',{name: 'John Doe', phone: '1234567890', title: 'Manager'},'Lou White')
    }
}