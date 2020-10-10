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

module.exports={
    url: 'https://devmountain-qa.github.io/weatherman/build/index.html',
    commands:[weatherCommands],
    elements: {
        searchBar:'.enter-location__input',
        resultCity:'.current-weather__location',
        errorMessage:'.error-message__message',
        searchButton:'.enter-location__submit',
        searchAgainButton:'.current-weather__search-again',
        tryAgainButton:'.error-message__try-again'

    }
}