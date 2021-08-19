import Base from '../base.class';

class Forgot extends Base {

    constructor() {
        super(); //to extend Base.class constructor
        this.exp = { //expected results
            
            errorMsgs: {
                emailEmpty: 'Please specify email',
                emailIncorrect: 'User with this email does not exist',
                emailCorrect: 'Password reminder sent'
            },

            urls: {
                redirected: 'http://qa.maf.place/',                
            },

            values: {
                emailPlaceholder: 'Email *',
                remindBtn: 'Remind Password'
            }

        }
    }

    //element selector getters
    get page() { return $('#forgot-page') }
    get emailField() { return $('#email') }
    get remindPasswordButton() { return $('#btn-remind') }
    get errorMsg() { return $('#error-text') }


    //methods
    checkPage() {
        this.page.waitForDisplayed();
    }

    openPage() {
        browser.url('/forgot');
    }

    // -------------------------- CHECKS and VALUES -----------------------------
    
    checkUrl() {
        expect(browser).toHaveUrl(this.baseExp.url.ForgotPage)
    }     
    
    checkEmailField() {
        expect(this.emailField).toBeDisplayed()
    }

    checkRemindPasswordButton() {
        expect(this.remindPasswordButton).toBeDisplayed()
    }

    checkEmailTextFieldValue() {
        expect(this.emailField).toHaveAttr('placeholder', this.exp.values.emailPlaceholder)
    }
    
    checkRemindPasswordButtonValue() {
        expect(this.remindPasswordButton).toHaveText(this.exp.values.remindBtn)
    }

    checkErrorMsgIfEmailEmpty() {
        expect(this.errorMsg).toHaveText(this.exp.errorMsgs.emailEmpty)
    }
    
    checkErrorMsgDissapearedOnInput() {
        this.errorMsg.waitForDisplayed({ reverse: true })
    }

    checkErrorMsgIfEmailIncorrect() {
        this.errorMsg.waitForDisplayed(this.exp.errorMsgs.emailIncorrect)
    }

    checkErrorMsgIfEmailCorrect() {
        this.errorMsg.waitForDisplayed(this.exp.errorMsgs.emailCorrect)
    }

    checkRemindPasswordRedirects() {
        expect(browser).toHaveUrl(this.baseExp.url.ForgotPage)
    }

    checkUserRedirected() {
        expect(browser).toHaveUrl(this.baseExp.url.LoginPage, { wait: 4000 })
    }

    //---------------------------CLICKS---------------------------------------------

    clickRemind() {
        this.remindPasswordButton.click()
    }

    //---------------------------SETS---------------------------------------------

    setEmailFieldValue(str) {
        this.emailField.setValue(str)
    }

}

export default new Forgot;