class Base {

    constructor() {
        this.baseExp = { //expected results
            title: 'The Maf Place',
            
            url: {
                reactSmartDev: 'https://www.reactsmart.dev/',
                LoginPage: 'http://qa.maf.place/',
                ForgotPage: 'http://qa.maf.place/forgot',
                PublicGame: ('http://qa.maf.place/public-game'),
            
            }

        }

    }

    get logo() { return $('#logo') }


    //methods
    checkTitle() {
        expect(browser).toHaveTitle(this.baseExp.title)
    }

    checkLogo() {
        expect(this.logo).toBeDisplayed()
    }

    switchTab(tab) {
        browser.switchWindow(tab)
    }

    checkReactSmartDevelopmentclick() {
        expect(browser).toHaveUrl(this.baseExp.url.reactSmartDev)
    }

}

export default Base;