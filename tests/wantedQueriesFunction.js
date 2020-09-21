var enterPage = {}
var enterWanted = (object, field, data, result) => {
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

var enterWantedData={header: 'ABC-123456',
mke: 'ABC',
ori: '123456789',
name: 'Spongebob',
sex: 'U',
race: 'U',
height: '123',
weight: '123',
hair: 'Yellow',
offense: 'Bubble blowing',
dateOfWarrant: '09/21/2020',
dl: 'ABC123',
dlState: 'CA',
dlExpiration: '09/25/2020',
licensePlate: '123ABC',
licenseState: 'CA',
licenseExpiration: '10/13/2020'}

var enterWantedField={ header: 'hdrInput',
mke: 'mkeInput',
ori: 'oriInput',
name: 'namInput',
sex: 'sexInput',
race: 'racInput',
height: 'hgtInput',
weight: 'wgtInput',
hair: 'haiInput',
offense: 'offInput',
dateOfWarrant: 'dowInput',
dl: 'olnInput',
dlState: 'olsInput',
dlExpiration: 'oldInput',
licensePlate: 'licInput',
licenseState: 'lisInput',
licenseExpiration: 'lidInput'}

module.exports = {
    before: browser => {
        enterPage = browser.page.wantedQueriesPageObject()
        enterPage.navigate()
    },
    after: browser => {
        enterPage.end()
    },
    'Enter Wanted Test': browser => {
        enterWanted(enterPage,enterWantedField,enterWantedData,
            'ABC-123456.ABC.123456789.Spongebob.U.U.123.123.Yellow.Bubble blowing.2020-09-21.ABC123.CA.2020-09-25.123ABC.CA.2020-10-13'
        )
    }
}