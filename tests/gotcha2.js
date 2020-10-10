var originalWindow=""
module.exports = {
    'Open in a new window': browser => {
        browser.url('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_link_target')
            .waitForElementPresent('#tryhome')
            .verify.urlEquals('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_link_target', 'On original window')
        browser.windowHandle(result=>{
            originalWindow=result.value
        })
            .frame('iframeResult')
            .click('a')
            .windowHandles(result => {
                var handle=result.value[1]
                browser.switchWindow(handle)
                    .verify.urlEquals('https://www.w3schools.com/', 'In new one')
                    .switchWindow(originalWindow)
                    .verify.urlEquals('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_link_target', 'Back to old')
                    .closeWindow()
                    .windowHandles(results => {
                        var handles = results.value
                        browser.verify.ok(handles.length === 1, "there is only one window open.")
                        .switchWindow(handle)
                        .verify.urlEquals('https://www.w3schools.com/', 'And it is the new one')
                    })
                    .end()
            })
    }
}