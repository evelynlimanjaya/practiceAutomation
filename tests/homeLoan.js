var loanPage={}
var add=(text1,text2)=>{return text1+" "+text2}
var data=[{
        loanType:'Home Purchase',
        propType:'Condo',
        city:'Los Angeles',
        loanProp:'Primary Home',
        newHome:'Yes',
        agent:'No',
        price:1000000,
        down:5000,
        credit:'Good',
        bankrupt:'Bankruptcy',
        addressOne:'123 ABC Drive',
        addressTwo:'DEF',
        addressThree:'Los Angeles',
        firstName:'Patrick',
        lastName:'Star',
        email:'patrick.star@bikbot.com',
        newHomeResult:'True',
        agentResult:'False'
    },
        {loanType:'Home Equity',
        propType:'Multi Family Dwelling',
        city:'New York',
        loanProp:'Rental Property',
        newHome:'No',
        agent:'Yes',
        price:3000000,
        down:25000,
        credit:'Excellent',
        bankrupt:'oreclosure',
        addressOne:'876 Berry Drive',
        addressTwo:'Fruit',
        addressThree:'New York',
        firstName:'Sandy',
        lastName:'Cheeks',
        email:'sandy.cheeks@bikbot.com',
        newHomeResult:'False',
        agentResult:'True'
    }
]

var dataInput=(object,input1,input2,input3,input4,input5,input6,input7,input8,input9,input10,input11,input12,input13,input14,input15,input16,input17,input18)=>{
    object
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
        
}





module.exports={
    before:browser=>{
        loanPage=browser.page.homeLoanPage()
        loanPage.navigate()
    },
    after:browser=>{
        loanPage.end()
    },
    'Loan test':browser=>{
        data.forEach(test=>{dataInput(loanPage,test.loanType,
                                                test.propType,
                                                test.city,
                                                test.loanProp,
                                                test.newHome,
                                                test.agent,
                                                test.price,
                                                test.down,
                                                test.credit,
                                                test.bankrupt,
                                                test.addressOne,
                                                test.addressTwo,
                                                test.addressThree,
                                                test.firstName,
                                                test.lastName,
                                                test.email,
                                                test.newHomeResult,
                                                test.agentResult)
                            }
                    )
    
}
}