//custom command write this before module.exports in Page Object
var weatherCommands={
    search: function (city){
        this
            .setValue('@searchBar', [city,this.api.Keys.ENTER])
            .waitForElementPresent('@resultCity')
            .expect.element('@resultCity').text.to.equal(city)
        this.click('.current-weather__search-again')
        return this
    }
}
//then add the commands to Page Object
module.exports={
    url: 'https://devmountain-qa.github.io/weatherman/build/index.html',
    commands:[weatherCommands], //add this one
    elements: {
        searchBar:'.enter-location__input',
        resultCity:'.current-weather__location',
        errorMessage:'.error-message__message',
        searchButton:'.enter-location__submit',
        searchAgainButton:'.current-weather__search-again',
        tryAgainButton:'.error-message__try-again'

    }
}
//in the test, just use the command as normal command
var weatherPage = {}

var searchData=[
    "San Diego",
    "San Jose",
    "Los Angeles"]

module.exports = {
    beforeEach: browser => {
        weatherPage = browser.page.weatherman()
        weatherPage.navigate()
    },
    after: browser=>{
        weatherPage.end()
    },
    'Custom command':browser=>{
            weatherPage
                .search(searchData[2])//like this
    }
}

//share information between files, create the reference file, add the information there

/**
 * Edits an employee and checks that the edit stuck.
 * 
 * @param {object} pageObject the page object currently being used for employee manager
 * @param {string} oldEmployee the name of the employee to be edited
 * @param {object} newEmployee {name: '', phone: '', title: ''} - the values desired post-edit
 * @param {string} otherEmployee the name of another employee not involved in the edit
 */
module.exports = (pageObject, oldEmployee, newEmployee, otherEmployee) => {
    pageObject
        .clickEmployee(oldEmployee)
        .editEmployee(newEmployee)
        .click('@saveButton')
        .clickEmployee(otherEmployee)
        .expect.element('@cardTitle').text.to.equal(otherEmployee).before(500)
    pageObject
        .clickEmployee(newEmployee.name)
        .expect.element('@cardTitle').text.to.equal(newEmployee.name).before(500)
    pageObject.expect.element('@nameField').value.to.equal(newEmployee.name)
    pageObject.expect.element('@phoneField').value.to.equal(newEmployee.phone)
    pageObject.expect.element('@titleField').value.to.equal(newEmployee.title)
}

//on the test file, require the reference file
let manager = {}
var addEmployee=require('../testsVault/employeeManagerFunction')//this one

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

//data driven testing---->use forEach for an array
//first, create data array
var searchData=[
    {input:"San Diego",result:"San Diego"},
    {input:"San Jose",result:"San Jose"},
    {input:"Los Angeles",result:"Los Angeles"}]

//create the function for the array
var searchFunction = (object, city,result) => {
    object
        .setValue('@searchBar', [city,object.api.Keys.ENTER])
        .waitForElementPresent('@resultCity')
        .expect.element('@resultCity').text.to.equal(result)
    object.click('.current-weather__search-again')
    
}

    module.exports = {
        beforeEach: browser => {
            weatherPage = browser.page.weatherman()
            weatherPage.navigate()
        },
        after: browser=>{
            weatherPage.end()
        },
        'Search for city': browser => {
            //this is the forEach
            searchData.forEach(test=>{searchFunction(weatherPage,test.input,test.result)})
        }
    }


//callbacks
var callbackPrac= (browser)=>{browser.
    getText('#employeeID',function(result){let idNumber = Number(result.value.slice(3))
browser
    .verify.ok(idNumber > 0, `The ID (${idNumber}) is a positive number.`)
    .verify.ok(idNumber % 1 === 0, `The ID (${idNumber}) is a whole number.`)
})}

module.exports={
    before:browser=>{
        browser.url('https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html')
            .waitForElementVisible('body')
    },
    after:browser=>{
        browser.end()
    },
   
    
    'Add Employee Test':browser=>{
            callbackPrac(browser)//this one
    }
}

//methods

var mathMethods={
    add: (num1, num2) => {
    return num1 + num2},
    subtract: (num1, num2) => {
    return num1 - num2},
    divide: (num1, num2) => {
    return num1 / num2},
    multiply: (num1, num2) => {
    return num1 * num2}

}

module.exports = {
    beforeEach: browser => {
        browser.url('http://www.google.com')
    },
    'check addition': browser => {
        browser
            .setValue('input[type="text"]', ['1+2', browser.Keys.ENTER])
            .waitForElementPresent('#cwos', 2000)
            .expect.element('#cwos').text.to.contain(mathMethods.add(1,2))
    },
    'check subtraction': browser => {
        browser
            .setValue('input[type="text"]', ['32-5', browser.Keys.ENTER])
            .waitForElementPresent('#cwos', 2000)
            .expect.element('#cwos').text.to.contain(mathMethods.subtract(32,5))//thjis
    },
    after: browser => browser.end()
}

//arrays
var arrayName=[value1,value2,value3,value4]
arrayName[2]

//functions
var enterWanted = (object, field, data/*this is an object*/, result) => {
    object
        .useXpath()
        .click('@menuButton')
        .waitForElementVisible('@enterOption')
        .click('@enterOption')
        .click('@overlay')
        .setValue(`//*[@name="${field.header}"]`, data.header)
        .setValue(`//*[@name="${field.mke}"]`, data.mke)
        .setValue(`//*[@name="${field.ori}"]`, data.ori)
        .setValue(`//*[@name="${field.name}"]`, data.name)
        .click(`//*[@name="${field.sex}"]`)
        .click(`//*[@name="${field.sex}"]/option[@value="${data.sex}"]`)
        .click(`//*[@name="${field.race}"]`)
        .click(`//*[@name="${field.race}"]/option[@value="${data.race}"]`)
        .setValue(`//*[@name="${field.height}"]`, data.height)
        .setValue(`//*[@name="${field.weight}"]`, data.weight)
        .setValue(`//*[@name="${field.hair}"]`, data.hair)
        .setValue(`//*[@name="${field.offense}"]`, data.offense)
        .setValue(`//*[@name="${field.dateOfWarrant}"]`, data.dateOfWarrant)
        .setValue(`//*[@name="${field.dl}"]`, data.dl)
        .setValue(`//*[@name="${field.dlState}"]`, data.dlState)
        .setValue(`//*[@name="${field.dlExpiration}"]`, data.dlExpiration)
        .setValue(`//*[@name="${field.licensePlate}"]`, data.licensePlate)
        .setValue(`//*[@name="${field.licenseState}"]`, data.licenseState)
        .setValue(`//*[@name="${field.licenseExpiration}"]`, data.licenseExpiration)
        .click('@saveButton')
        .expect.element('//*[@name="queryBody"]').text.equal(result)
}

//String interpolation, don't forget to use backticks
`//*[@name="${field.header}"]`

//switch frame and window
module.exports = {
    'Open in a new window': browser => {
        browser.url('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_link_target')
            .waitForElementPresent('#tryhome')
            .verify.urlEquals('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_link_target', 'On original window')
            .frame('iframeResult')
            .click('a')
            .windowHandles(results => {
                var firstWindow = results.value[0]
                var newWindow = results.value[1]
                browser
                    .switchWindow(newWindow)
                    .verify.urlEquals('https://www.w3schools.com/', 'In new one')
                    .switchWindow(firstWindow)
                    .verify.urlEquals('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_link_target', 'Back to old')
                    .closeWindow()
                    .windowHandles(results => {
                        var handles = results.value
                        browser.verify.ok(handles.length === 1, "there is only one window open.")
                            .switchWindow(newWindow)
                            .verify.urlEquals('https://www.w3schools.com/', 'And it is the new one')
                    })
                    .end()
            })
    }
}

//frame
.frame()
.frameParent()

//handling alerts
.acceptAlert()
.dismissAlert()
.getAlertText(result=>{})
.setAlertText(text)

//for loops
var empArray = require('../testAssets/employeeArray')
var myFunc = require('../testAssets/anotherEMPFunction')
module.exports = {
    beforeEach: browser => {
        browser
            .url('https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html')
            .waitForElementVisible('body')
    },
    after: browser => {
        browser
            .end()
    },
    'A test to check if it is Bernice': browser => {
        for (let i = 0; i<empArray.length; i++) {
            console.log(i)
            myFunc(browser, empArray[i])
        }
    }
}

//if
module.exports = (browser, data) => {
    browser
        .useXpath()
        .click(`//*[text()="${data.name}"]`)
        .useCss()
        .waitForElementPresent('#employeeTitle')
        .getText('#employeeTitle', (result)=> {
            var empName = result.value
            console.log(empName)
            if (empName === 'Bernice Ortiz') {
                console.log('Bernice is already sus')
            }
            else {
                console.log('Not the Imposter')
            }
        })
        .verify.value('[name="titleEntry"]', data.title)
}
module.exports = [
    {
        name: 'Marnie Barnett',
        title: 'CTO'
    },
    {
        name: 'Eve Sparks',
        title: 'Product Manager'
    },
    {
        name: 'Lou White',
        title: 'Full-Stack Developer'
    },
    {
        name: 'Bernice Ortiz',
        title: 'CEO'
    }
]
