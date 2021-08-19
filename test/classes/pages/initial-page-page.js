import Base from '../base.class';

class InitialPage extends Base {

    constructor() {
        super(); //to extend Base.class constructor
        this.exp = { //expected results

            errorMsgs: {
                
            },

            values: {
                
            },

            urls: {
                initialPageUrl: 'http://qa.maf.place/game/initial',
            },
        }
    }
    //element selector getters
    get page() { return $('#initial-page') }

    //methods
    
    openPage() {
        browser.url('/game/initial');
    }

    checkPage() {
        this.page.waitForDisplayed();
    }

    checkUrl() {
        expect(browser).toHaveUrl(this.exp.urls.initialPageUrl)
    }
    
    checkRedirectFromPublicGame() {
        expect(browser).toHaveUrl(this.exp.urls.initialPageUrl, { wait: 4000 })
    }
    
    

}

export default new InitialPage;