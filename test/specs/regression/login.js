import Login from '../../classes/pages/login.page';
import Forgot from '../../classes/pages/forgot.page';

describe('Elements', () => {

    before(() => {
        Login.openPage();
    })

    // it('Header', () => {
    //     const elem = $('#header')
    //     expect(elem).toBeDisplayed()
    // })

    it('Logo', () => {
        Login.checkLogo()

    })

    it('Email field', () => {
        Login.checkEmailField()
    })

    it('Password field', () => {
        Login.checkPasswordField()
    })

    it('Login button', () => {
        Login.checkLoginButton()
    })

    it('Remind password button', () => {
        Login.checkRemindPasswordButton()
    })

    it('Footer', () => {
        Login.checkFooter()
    })

})

describe('Values', () => {

    it('Email placeholder', () => {
        Login.checkEmailFieldPlaceholder()
    })

    it('Password placeholder', () => {
        Login.checkPasswordPlaceholder()
    })

    it('Login button', () => {
        Login.checkLoginButtonValue()
    })

    it('Remind password button', () => {
        Login.checkRemindPasswordButtonValue()
    })



})

describe('Functionality', () => {


    it('both fields are empty', () => {
        Login.clickLogin()
        Login.checkErrorBothFieldsEmpty()
    })

    it('Error message disapears on input in Email field', () => {
        Login.setEmailFieldValue('a')
        Login.checkErrorMsgDissapears()
    })

    it('only Password field is empty', () => {
        Login.setEmailFieldValue('a')
        Login.clickLogin()
        Login.checkErrorMsgIfPasswordFieldEmpty()

    })

    it('Error message disapears on input in Password field', () => {
        Login.setPasswordFieldValue('a')
        Login.checkErrorMsgDissapears()
    })

    it('only Email field is empty', () => {
        Login.openPage()
        Login.setPasswordFieldValue('a')
        Login.clickLogin()
        Login.checkErrorMsgIfEmailFieldEmpty()

    })

    it('if Email is incorrect', () => {
        Login.setEmailFieldValue('a')
        Login.setPasswordFieldValue('h')
        Login.clickLogin()
        Login.checkErrorMsgIfEmailIncorrect()
    })

    it('if Email is correct but Password is not', () => {
        Login.setEmailFieldValue('mafplaceqauser@gmail.com')
        Login.setPasswordFieldValue('h')
        Login.clickLogin()
        Login.checkErrorMsgIfEmailCorrectPasswordIncorrect()
    })

    it('Remind Password redirects', () => {
        Login.clickRemind()
        Forgot.checkUrl()
    })

    
})

