import Header from "../../classes/elements/header.elem";

describe('Elements', () => {

    before(() => {
        browser.url('/');
    })

    it('Header', () => {
        Header.checkElem()
    })

    it('Rating button', () => {
        Header.checkRatingButton()
    })

    it('Public Game button', () => {
        Header.checkPublicGameButton()
    })

    it('Back to Login button is NOT displayed', () => {
        Header.checkBackToLoginButtonIsNOTdisplayed()
    })
    
})

describe('Functionality', () => {

     
    it('Clicking Rating button redirects', () => {
        Header.clickRating()
        Header.checkClickRatingBtnRedirects()
    })

    it('Rating page is displayed after the redirect', () => {
        Header.checkRatingPageDisplayed()
        
    })

    it('Clicking Public Game redirects', () => {
        Header.clickPublicGame()
        Header.checkClickPublicGameRedirects()
    })

    it('Public Game page is displayed after the redirect', () => {
        Header.checkPublicGameDisplayed()
        
    })

    it('Back to Login button is displayed in Header if navigate', () => {
       
        Header.checkBackToLoginBtnDisplayed()
        
    })

    it('Clicking Back to Login button redirects', () => {
        Header.clickBackToLoginBtn()
        Header.checkBackToLoginBtnRedirects()
    })

    it('Login page is displayed after the redirect', () => {
        Header.checkLoginPageDisplayed()
        
    })

    

})