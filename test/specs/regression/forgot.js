import Forgot from "../../classes/pages/forgot.page";

describe('Elements', () => {

    before(() => {
        Forgot.openPage();
    })

    // it('Header', () => {
    //     const elem = $('#header')
    //     expect(elem).toBeDisplayed()
    // })


    it('Logo', () => {
        Forgot.checkLogo()
    })

    it('Email text field', () => {
        Forgot.checkEmailField()
    })

    it('Remind Password Button', () => {
        Forgot.checkRemindPasswordButton()
    })

    // it('Footer', () => {
    //     const elem = $('#footer')
    //     expect(elem).toBeDisplayed()
    // })


})

describe('Values', () => {

    it('Email text field', () => {
        Forgot.checkEmailTextFieldValue()
    })

    it('Remind Password Button', () => {
        Forgot.checkRemindPasswordButtonValue()
    })




})

describe('Functionality', () => {

    it('if only Email field is empty', () => {
        Forgot.clickRemind()
        Forgot.checkErrorMsgIfEmailEmpty()
    })

    it('Error message disapears on input in Email field', () => {
        Forgot.setEmailFieldValue('e')
        Forgot.checkErrorMsgDissapearedOnInput()
    })

    it('if Email is incorrect', () => {
        Forgot.setEmailFieldValue('e')
        Forgot.clickRemind()
        Forgot.checkErrorMsgIfEmailIncorrect()
    })

    it('if Email is correct', () => {
        Forgot.setEmailFieldValue('mafplaceqauser@gmail.com')
        Forgot.clickRemind()
        Forgot.checkErrorMsgIfEmailCorrect()
    })

    it('User is redirected', () => {
        Forgot.checkUserRedirected()
    })




})


