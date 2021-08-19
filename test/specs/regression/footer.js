import Footer from "../../classes/elements/footer.elem";

describe('Elements', () => {

    before(() => {
        browser.url('/');
    })

    it('Footer', () => {
        Footer.checkElem()
    })

    it('Language toggle is displayed', () => {
        Footer.checkLanguageToggleIsDisplayed()
    })

    it('Copyright is displayed', () => {
        Footer.checkCopyright()
    })

    it('Version is displayed', () => {
        Footer.checkVersionLabel()
    })

    it('Version is displayed', () => {
        Footer.checkVersionValue()
    })

    it('Developer info is displayed', () => {
        Footer.checkDeveloperLink()
    })

    it('Developer info is displayed', () => {
        Footer.checkDeveloperPrepend()
    })

    
})

describe('Values', () => {

    it('Language toggle value', () => {
        Footer.checkLanguagetogglevalueRU()
    })  
    
    it('The copyright is', () => {
        Footer.checkCopyrightValue
    })

    it('Version contains', () => {
        Footer.checkVersioncontainsword()
    })

    it('Developers info', () => {
        Footer.checkDeveloperPrepend()
    })

    it('Developers info', () => {
        Footer.checkDeveloperLink()
    })


})

describe('Functionality', () => {
     
    it('Clicking RU changes the toggle', () => {
        Footer.clickLanguageToggle()
        Footer.checkRuChangesToggle()
    })

    it('Clicking EN changes the toggle', () => {
        Footer.clickLanguageToggle()
        Footer.checkEnChangesToggle()
    })

    it('Clicking React Smart Development', () => {
        Footer.clickDeveloperLink()
        Footer.switchTab('ReactSmart.Dev')
        Footer.checkReactSmartDevelopmentclick()
    })

      

})