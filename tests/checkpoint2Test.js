var testPage={}
module.exports={
    beforeEach: browser=>{
        testPage=browser.page.checkpoint2PageObject()
        testPage.navigate()
    },
    after:browser=>{
        testPage.end()
    },


    'Evens and Odds Test':browser=>{
        testPage
            .setValue('@evenOddInput','98,56,2,1,564,765,43')
            .click('@evenOddButton')
            .verify.containsText('@evenResults','Evens: [98,56,2,564]')
            .verify.containsText('@oddResults','Odds: [1,765,43]')
//NEXT check alphabet input
            .clearValue('@evenOddInput')
            .setValue('@evenOddInput','orange,apple,tomato,mango')
            .click('@evenOddButton')
            .verify.containsText('@evenResults','Evens: []')
            .verify.containsText('@oddResults','Odds: []')
//bug found: "even" and "odd" results are inconsistent, "even" shows empty but "odd" shows null
//suggestion: error message should shows up explaining input field only accepts numbers
//NEXT check what if I input decimals
            .clearValue('@evenOddInput')
            .setValue('@evenOddInput','654.32')
            .click('@evenOddButton')
            .verify.containsText('@evenResults','Evens: []')
            .verify.containsText('@oddResults','Odds: []')        
//bug found: "odd" result shows 654, the number before period.
//suggestion: error message should shows up explaining decimals are invalid
//NEXT check what if I input alphabets after period sign
            .clearValue('@evenOddInput')
            .setValue('@evenOddInput','122.test')
            .click('@evenOddButton')
            .verify.containsText('@evenResults','Evens: []')
            .verify.containsText('@oddResults','Odds: []')  
//bug found: "odd" result shows 122, the number before period
//suggestion: error message should shows up explaining invalid input      
},



    'Filter Object Test':browser=>{
        testPage
            .setValue('@objectFilterInput','hairColor')
            .click('@objectFilterButton')
            .verify.containsText('@objectFilterResults','Filtered: [ { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" } ]')
//NEXT check if it accept object value instead of object property
            .setValue('@objectFilterInput','CEO')
            .click('@objectFilterButton')
            .verify.containsText('@objectFilterResults','Filtered: []')

    },

    
    'Filter String Test':browser=>{
        testPage
            .setValue('@nameFilterInput','dy')
            .click('@nameFilterButton')
            .verify.containsText('@nameFilterResults','Filtered Names: [ "Melody", "Maddy" ]')
//NEXT check if it accepts number
            .setValue('@nameFilterInput','3')
            .click('@nameFilterButton')
            .verify.containsText('@nameFilterResults','Filtered Names: []')

    },


    'Palindrome Test':browser=>{
        testPage
            .setValue('@palindromeInput','mom')
            .click('@palindromeButton')
            .verify.containsText('@palindromeResults','Palindrome: true')
 //NEXT check case sensitiveness
            .clearValue('@palindromeInput')
            .setValue('@palindromeInput','kayAk')
            .click('@palindromeButton')
            .verify.containsText('@palindromeResults','Palindrome: false')
//NEXT check spacing
            .clearValue('@palindromeInput')
            .setValue('@palindromeInput','civ ic')
            .click('@palindromeButton')
            .verify.containsText('@palindromeResults','Palindrome: false')
//NEXT check special characters
            .clearValue('@palindromeInput')
            .setValue('@palindromeInput','^&*&^')
            .click('@palindromeButton')
            .verify.containsText('@palindromeResults','Palindrome: true')
    },


    'Sum Test': browser=>{
        testPage
            .setValue('@sumInput1','3456')
            .setValue('@sumInput2','12312')
            .click('@sumButton')
            .verify.containsText('@sumResults','Sum: 15768')
//NEXT check if I input alphabets
            .clearValue('@sumInput1')
            .clearValue('@sumInput2')
            .setValue('@sumInput1','eee')
            .setValue('@sumInput2','eee')
            .click('@sumButton')
            .verify.containsText('@sumResults','Sum: NaN')
//bug found: the result for "eee"+"eee" was shown as 0, it should be "NaN"
    }
}