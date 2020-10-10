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
    'For Loops Test':browser=>{
            for(let i =0;i<1;i++){
                console.log(i)
                loanPage.nameCheck(data[i].loanType,
                    data[i].propType,
                    data[i].city,
                    data[i].loanProp,
                    data[i].newHome,
                    data[i].agent,
                    data[i].price,
                    data[i].down,
                    data[i].credit,
                    data[i].bankrupt,
                    data[i].addressOne,
                    data[i].addressTwo,
                    data[i].addressThree,
                    data[i].email,
                    data[i].newHomeResult,
                    data[i].agentResult)
            }
    }

}