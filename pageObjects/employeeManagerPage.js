var employeeManagerCommands = {
    clickEmployee: function(employeeName) {
        this.api.useXpath()
        this.click(`//li[text()="${employeeName}"]`)
        this.api.useCss()
        return this
    }, 
    editEmployee: function(employeeInfo){
        if(employeeInfo.name){
            this
                .clearValue('@nameField')
                .setValue('@nameField', employeeInfo.name)
        }
        if(employeeInfo.phone){
            this
                .clearValue('@phoneField')
                .setValue('@phoneField', employeeInfo.phone)
        }
        if(employeeInfo.title){
            this
                .clearValue('@titleField')
                .setValue('@titleField', employeeInfo.title)
        }
        return this
    }
}


module.exports = {
    url: 'https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html',
    commands: [employeeManagerCommands],
    elements: {
        versionNumber: 'footer',
        addButton: 'li[name="addEmployee"]',
        newEmployee: {
            selector: '//li[text()="New Employee"]',
            locateStrategy: 'xpath'
        },
        cardTitle: '#employeeTitle',
        nameField: 'input[name="nameEntry"]',
        phoneField: 'input[name="phoneEntry"]',
        titleField: 'input[name="titleEntry"]',
        saveButton: '#saveBtn'
    }
}