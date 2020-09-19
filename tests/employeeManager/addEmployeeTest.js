module.exports={
    before:browser=>{
        browser.url('https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html')
            .waitForElementVisible('body')
    },
    after:browser=>{
        browser.end()
    },
   
    
    'Add Employee Test':browser=>{
        var newEmployee = {
            employeeName : "John Doe",
            employeePhone : "7654738290",
            employeeTitle : "CEO"
        }
        var addEmployeeButton = 'li[name="addEmployee"]'
        var inputName = 'input[name="nameEntry"]'
        var inputPhone = 'input[name="phoneEntry"]'
        var inputTitle = 'input[name="titleEntry"]'


        browser
            .click(addEmployeeButton)
            .click('li[name="employee11"]')
            .clearValue(inputName)
            .setValue(inputName,newEmployee.employeeName)
            .clearValue(inputPhone)
            .setValue(inputPhone,newEmployee.employeePhone)
            .clearValue(inputTitle)
            .setValue(inputTitle,newEmployee.employeeTitle)
            .click('#saveBtn')
            .click('li[name="employee10"]')
            .click('li[name="employee11"]')
            .verify.elementPresent('li[name="employee11"]')
            .verify.visible('li[name="employee11"]')
            .pause(5000)
            .verify.containsText('p[name="employeeName"]','John Doe')
            .verify.containsText('li[name="employee11"]','John Doe')
            .verify.valueContains(inputName,newEmployee.employeeName)
            .verify.valueContains(inputPhone,newEmployee.employeePhone)
            .verify.valueContains(inputTitle,newEmployee.employeeTitle)
        
    }
}