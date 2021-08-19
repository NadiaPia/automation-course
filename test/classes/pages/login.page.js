import Base from '../base.class';

class Login extends Base {

    constructor() {
        super(); //to extend Base.class constructor
        this.exp = { //expected results
            
            errorMsgs: {
                anyFieldEmpty: 'Please specify email and password',
                emailIncorrect: 'User with this email does not exist',
                passwordIncorrect: 'Password is incorrect',
            },

            
            values: {
                emailFieldPlaceholder: 'Email *',
                passwordFieldPlaceholder: 'Password *',
                remindPasswordButton: 'Remind Password', //Should be Remind Password
                loginButton: 'Login', //Should be Login

            }

        }
    }

    //element selector getters
    get page() { return $('#login-page') }
    get emailField() { return $('#username') }
    get passwordField() { return $('#pass') }
    get loginBtn() { return $('#btn-login') }
    get remindPasswordButton() { return $('#btn-forgot') }
    get footer() { return $('#footer') }
    get errorMsg() { return $('#error-text') }
    


    //methods
    checkPage() {
        this.page.waitForDisplayed();
    }

    openPage() {
        browser.url('/');
    }

    // -------------------------- CHECKS and VALUES -----------------------------

    checkUrl() {
        expect(browser).toHaveUrl(this.baseExp.url.LoginPage)
    }    

    checkRedirectFromForgot() {
        expect(browser).toHaveUrl(this.baseExp.url.LoginPage, {wait: 4000})
    }

    checkEmailField() {
        expect(this.emailField).toBeDisplayed()
    }

    checkPasswordField() {
        expect(this.passwordField).toBeDisplayed()
    }

    checkLoginButton() {
        expect(this.loginBtn).toBeDisplayed()
    }

    checkRemindPasswordButton() {
        expect(this.remindPasswordButton).toBeDisplayed()
    }

    checkFooter() {
        expect(this.footer).toBeDisplayed()
    }

    checkEmailFieldPlaceholder() {
        expect(this.emailField).toHaveAttribute('placeholder', this.exp.values.emailFieldPlaceholder)
    }

    checkPasswordPlaceholder() {
        expect(this.passwordField).toHaveAttribute('placeholder', this.exp.values.passwordFieldPlaceholder)
    }

    checkLoginButtonValue() {
        expect(this.loginBtn).toHaveText(this.exp.values.loginButton)
    }

    checkRemindPasswordButtonValue() {
        expect(this.remindPasswordButton).toHaveText(this.exp.values.remindPasswordButton)
    }
    
    checkErrorBothFieldsEmpty() {
        expect(this.errorMsg).toHaveText(this.exp.errorMsgs.anyFieldEmpty)
    }    

    checkErrorMsgDissapears() {
        this.errorMsg.waitForDisplayed({ reverse: true })
    }

    checkErrorMsgIfPasswordFieldEmpty() {
        this.errorMsg.waitForDisplayed()
        expect(this.errorMsg).toHaveText(this.exp.errorMsgs.anyFieldEmpty)
    }    
    
    checkErrorMsgIfEmailFieldEmpty() {
        this.errorMsg.waitForDisplayed()
        expect(this.errorMsg).toHaveText(this.exp.errorMsgs.anyFieldEmpty)
    }

    checkErrorMsgIfEmailIncorrect() {
        this.errorMsg.waitForDisplayed()
        expect(this.errorMsg).toHaveText(this.exp.errorMsgs.emailIncorrect)
    }

    checkErrorMsgIfEmailCorrectPasswordIncorrect() {
        this.errorMsg.waitForDisplayed()
        expect(this.errorMsg).toHaveText(this.exp.errorMsgs.passwordIncorrect)
    }

    //---------------------------CLICKS---------------------------------------------

    clickLogin() {
        this.loginBtn.click()
    }

    clickRemind() {
        this.remindPasswordButton.click()
    }

    //---------------------------SETS---------------------------------------------
    
    setPasswordFieldValue(str) {
        this.passwordField.setValue(str)
    }

    setEmailFieldValue(str) {
        this.emailField.setValue(str)
    }
    
}

export default new Login;
