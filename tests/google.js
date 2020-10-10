module.exports = {
    beforeEach: browser => {
        browser.url('https://www.google.com/')
    },
    after: browser => {
        browser.end()
    },
    'Search test': browser => {
        var result='#res'
        browser
            .setValue('input[name="q"]',['odin sphere',browser.Keys.ENTER])
            .waitForElementVisible('#res')
            .pause(2000)
            .getText('#res', check=>{
                var searchCheck=check.value.search(/yakiniku|odin sphere/i)
                console.log(searchCheck)
                if(searchCheck!==-1){
                    console.log('Search match')
                }
                else{
                    console.log("Search doesn't match")
                }
            })
    }

}

// var string='Andrew is a very cute boy'
// var result=string.split(' ')
// var finalResult=String(result)
// var forRegExp=finalResult.replace(/,/g,'|')
// console.log(forRegExp)
// var resultRegExp=RegExp(forRegExp,'i')
// console.log(resultRegExp)