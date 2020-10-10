var weatherPage = {}
var searchFunction = (object, city) => {
    object
        .setValue('@searchBar', [city,object.api.Keys.ENTER])
        .waitForElementPresent('@resultCity')
        .expect.element('@resultCity').text.to.equal(city)
    object.click('.current-weather__search-again')
    
}
var searchData=[
    {input:"San Diego"},
{input:"San Jose"},
{input:"Los Angeles"}]

module.exports = {
    beforeEach: browser => {
        weatherPage = browser.page.weatherman()
        weatherPage.navigate()
    },
    after: browser=>{
        weatherPage.end()
    },
    'Search for city': browser => {
        searchData.forEach(test=>{searchFunction(weatherPage,test.input)})
    }
}