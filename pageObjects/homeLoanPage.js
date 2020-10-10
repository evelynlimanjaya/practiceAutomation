var add=(text1,text2)=>{return text1+" "+text2}
var homeCommands=[{
    dataInput:function(input1,input2,input3,input4,input5,input6,input7,input8,input9,input10,input11,input12,input13,input14,input15,input16,input17,input18){
        this
            .useXpath()
            .click('@getStartedBtn')
            .click('@loanTypes')
            .click(`//option[@value="${input1}"]`)
            .click('@propTypes')
            .click(`//option[@value="${input2}"]`)
            .click('@button')
            .setValue('@cityInput',input3)
            .click('@button')
            .click(`//button[contains(text(),"${input4}")]`)
            .click(`//button[contains(text(),"${input5}")]`)
            .click(`//button[contains(text(),"${input6}")]`)
            .setValue('@priceInput',input7)
            .setValue('@downInput',input8)
            .click('@button')
            .click(`//button[contains(text(),"${input9}")]`)
            .click(`//button[contains(text(),"${input10}")]`)
            .setValue('@addressOne',input11)
            .setValue('@addressTwo',input12)
            .setValue('@addressThree',input13)
            .click('@button')
            .setValue('@firstName',input14)
            .setValue('@lastName',input15)
            .setValue('@email',input16)
            .click('@button')
            .verify.containsText('//div[contains(text(),"Name")]',add(input14,input15))
            .verify.containsText('//div[contains(text(),"Email")]',input16)
            .verify.containsText('//div[contains(text(),"type of loan")]',input1)
            .verify.containsText('//div[contains(text(),"What type of property are you purchasing")]',input2)
            .verify.containsText('//div[contains(text(),"city")]',input3)
            .verify.containsText('//div[contains(text(),"Type of property the loan")]',input4)
            .verify.containsText('//div[contains(text(),"new home")]',input17)
            .verify.containsText('//div[contains(text(),"real estate agent")]',input18)
            .verify.containsText('//div[contains(text(),"purchase price")]',input7)
            .verify.containsText('//div[contains(text(),"Down payment")]',input8)
            .verify.containsText('//div[contains(text(),"Credit score")]',input9)
            .verify.containsText('//div[contains(text(),"Bankruptcy history")]',input10)
            .verify.containsText('//*[@id="addressOne"]',input11)
            .verify.containsText('//*[@id="addressTwo"]',input12)
            .verify.containsText('//*[@id="addressThree"]',input13)
            .click('@restartBtn')
            return this
        
    },
    nameCheck:function(input1,input2,input3,input4,input5,input6,input7,input8,input9,input10,input11,input12,input13,input16,input17,input18){
        this
            .useXpath()
            .click('@getStartedBtn')
            .click('@loanTypes')
            .click(`//option[@value="${input1}"]`)
            .click('@propTypes')
            .click(`//option[@value="${input2}"]`)
            .click('@button')
            .setValue('@cityInput',input3)
            .click('@button')
            .click(`//button[contains(text(),"${input4}")]`)
            .click(`//button[contains(text(),"${input5}")]`)
            .click(`//button[contains(text(),"${input6}")]`)
            .setValue('@priceInput',input7)
            .setValue('@downInput',input8)
            .click('@button')
            .click(`//button[contains(text(),"${input9}")]`)
            .click(`//button[contains(text(),"${input10}")]`)
            .setValue('@addressOne',input11)
            .setValue('@addressTwo',input12)
            .setValue('@addressThree',input13)
            .click('@button')
            .setValue('@email',input16)
            .click('@button')
            .verify.containsText('//div[contains(text(),"Name")]','')
            .verify.containsText('//div[contains(text(),"Email")]',input16)
            .verify.containsText('//div[contains(text(),"type of loan")]',input1)
            .verify.containsText('//div[contains(text(),"What type of property are you purchasing")]',input2)
            .verify.containsText('//div[contains(text(),"city")]',input3)
            .verify.containsText('//div[contains(text(),"Type of property the loan")]',input4)
            .verify.containsText('//div[contains(text(),"new home")]',input17)
            .verify.containsText('//div[contains(text(),"real estate agent")]',input18)
            .verify.containsText('//div[contains(text(),"purchase price")]',input7)
            .verify.containsText('//div[contains(text(),"Down payment")]',input8)
            .verify.containsText('//div[contains(text(),"Credit score")]',input9)
            .verify.containsText('//div[contains(text(),"Bankruptcy history")]',input10)
            .verify.containsText('//*[@id="addressOne"]',input11)
            .verify.containsText('//*[@id="addressTwo"]',input12)
            .verify.containsText('//*[@id="addressThree"]',input13)
            return this
        
    }
}]


module.exports={
    url:'http://localhost:3000/#/',
    commands:homeCommands,
    elements:{
        getStartedBtn:'.home-btn',
        loanTypes:'#loanTypes',
        propTypes:'#propertyTypes',
        cityInput:'[name="city"]',
        button:{
            selector:'//button',
            locateStrategy:'xpath'
        },
        priceInput:'[name="price"]',
        downInput:'[name="down"]',
        addressOne:'#addressOne',
        addressTwo:'#addressTwo',
        addressThree:'#addressThree',
        firstName:'#first',
        lastName:'#last',
        email:'#email',
        restartBtn:{
            selector:'//*[@name="restartButton"]',
            locateStrategy:'xpath'
        }
    }
}
