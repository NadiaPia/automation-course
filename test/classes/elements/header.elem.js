import Base from '../base.class';

class Header extends Base {

    constructor() {
        super(); //to extend Base.class constructor
        this.exp = { //expected results
            urls: {
                ratingRedirect: 'http://qa.maf.place/users',
                publicGameRedirect: 'http://qa.maf.place/public-game',
                backToLoginBtnRedirects: 'http://qa.maf.place/'
            }

        }
    }

    //element selector getters
    get elem() { return $('#header') }
    get RatingButton() { return $('#btn-all') }
    get PublicGameButton() { return $('#btn-game') }
    get BackToLoginBtn() { return $('.btn-outline-primary') }
    get ratingPage() { return $('#site-content') }
    get gamePage() { return $('#game-config') }
    get loginPage() { return $('#login-page') }
    get accountButton() { return $('#btn-user') }
    get logOutButton() { return $('#btn-logout') }
    
    //methods
    checkElem() {
        this.elem.waitForDisplayed();
    }

    clickRating() {
        this.RatingButton.click()
    }
    clickPublicGame() {
        this.PublicGameButton.click()
    }

    clickBackToLoginBtn() {
        this.BackToLoginBtn.click()
    }

    clickAccountBtn() {
        this.accountButton.click()
    }

    clickLogOutBtn() {
        this.logOutButton.click()
    }

    checkRatingButton() {
        expect(this.RatingButton).toBeDisplayed()
    }

    checkPublicGameButton() {
        expect(this.PublicGameButton).toBeDisplayed()
    }

    checkBackToLoginButtonIsNOTdisplayed() {
        this.BackToLoginBtn.waitForDisplayed({ reverse: true })
    }

    checkClickRatingBtnRedirects() {
        expect(browser).toHaveUrl(this.exp.urls.ratingRedirect)
    }

    checkRatingPageDisplayed() {
        expect(this.ratingPage).toBeDisplayed()
    }

    checkClickPublicGameRedirects() {
        expect(browser).toHaveUrl(this.exp.urls.publicGameRedirect)
    }

    checkPublicGameDisplayed() {
        expect(this.gamePage).toBeDisplayed()
    }

    checkBackToLoginBtnDisplayed() {
        browser.url('http://qa.maf.place/forgot')
        expect(this.BackToLoginBtn).toBeDisplayed()
    }

    checkBackToLoginBtnRedirects() {
        expect(browser).toHaveUrl(this.exp.urls.backToLoginBtnRedirects)
    }

    checkLoginPageDisplayed() {
        expect(this.loginPage).toBeDisplayed()
    }

    checkAccountButtonDisplayed() {
        expect(this.accountButton).toBeDisplayed()
    }

    checkLogOutButtonDisplayed() {
        expect(this.logOutButton).toBeDisplayed()
    }

    checkAccountButtonNotDisplayed() {
        expect(this.accountButton).not.toBeDisplayed()
    }

    checkLogOutButtonNotDisplayed() {
        expect(this.logOutButton).not.toBeDisplayed()
    }

}

export default new Header;