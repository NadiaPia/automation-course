import Login from '../../classes/pages/login.page';
import Header from '../../classes/elements/header.elem';
import Forgot from '../../classes/pages/forgot.page';
import GameCreationTab from '../../classes/pages/game-creation-tab.page';
import InitialPage from '../../classes/pages/initial-page-page';
import NewGameTab from '../../classes/pages/new-game-tab.page';

describe('Authentication', () => {

    before(() => {
        Login.openPage();
        
    })

    it('Login', () => {
        Login.setEmailFieldValue('mafplaceqauser@gmail.com')
        Login.setPasswordFieldValue('mafplace2021')
        Login.clickLogin()
        Header.checkAccountButtonDisplayed()
        Header.checkLogOutButtonDisplayed()             
    })

    it('LogOut', () => {
        Header.clickLogOutBtn()
        Login.checkUrl()
        Login.checkPage()
        Header.checkLogOutButtonNotDisplayed()
        Header.checkAccountButtonNotDisplayed()        
    })

    it('Remind password', () => {
        Login.clickRemind()
        Forgot.setEmailFieldValue('mafplaceqauser@gmail.com')
        Forgot.clickRemind()
        Forgot.checkErrorMsgIfEmailCorrect()
        Login.checkRedirectFromForgot()
    })

    
})