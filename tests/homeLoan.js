var loanPage={}
var data = require('../testsVault/homeLoanForEach')

module.exports={
    before:browser=>{
        loanPage=browser.page.homeLoanPage()
        loanPage.navigate()
    },
    after:browser=>{
        loanPage.end()
    },
    'Loan test':browser=>{
        data.forEach(test=>{loanPage.dataInput(test.loanType,
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
        loanPage.nameCheck(
                            data[1].loanType,
                            data[1].propType,
                            data[1].city,
                            data[1].loanProp,
                            data[1].newHome,
                            data[1].agent,
                            data[1].price,
                            data[1].down,
                            data[1].credit,
                            data[1].bankrupt,
                            data[1].addressOne,
                            data[1].addressTwo,
                            data[1].addressThree,
                            data[1].email,
                            data[1].newHomeResult,
                            data[1].agentResult
                        )
            }
}