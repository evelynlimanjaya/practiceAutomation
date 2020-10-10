var enterPage = {}
module.exports = {
    before: browser => {
        enterPage = browser.page.wantedQueriesPageObject()
        enterPage.navigate()
    },
    after: browser => {
        enterPage.end()
    },

    'Enter Wanted Test': browser => {
        enterPage
            .useXpath()
            .click('@menuButton')
            .waitForElementVisible('@enterOption')
            .click('@enterOption')
            .click('@overlay')
            .setValue('//*[@name="hdrInput"]', 'ABC-123456')
            .setValue('//*[@name="mkeInput"]', 'ABC')
            .setValue('//*[@name="oriInput"]', '123456789')
            .setValue('//*[@name="namInput"]', 'Spongebob')
            .click('//*[@name="sexInput"]')
            .click('//*[@name="sexInput"]/option[@value="U"]')
            .click('//*[@name="racInput"]')
            .click('//*[@name="racInput"]/option[@value="U"]')
            .setValue('//*[@name="hgtInput"]', '123')
            .setValue('//*[@name="wgtInput"]', '123')
            .setValue('//*[@name="haiInput"]', 'Yellow')
            .setValue('//*[@name="offInput"]', 'Bubble blowing')
            .setValue('//*[@name="dowInput"]', '09/21/2020')
            .setValue('//*[@name="olnInput"]', 'ABC123')
            .setValue('//*[@name="olsInput"]', 'CA')
            .setValue('//*[@name="oldInput"]', '09/25/2020')
            .setValue('//*[@name="licInput"]', '123ABC')
            .setValue('//*[@name="lisInput"]', 'CA')
            .setValue('//*[@name="lidInput"]', '10/13/2020')
            .click('@saveButton')
            .expect.element('//*[@name="queryBody"]').text.equal('ABC-123456.ABC.123456789.Spongebob.U.U.123.123.Yellow.Bubble blowing.2020-09-21.ABC123.CA.2020-09-25.123ABC.CA.2020-10-13')

    }
}