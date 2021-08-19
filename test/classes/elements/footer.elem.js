import Base from '../base.class';

class Footer extends Base {

    constructor() {
        super(); //to extend Base.class constructor
        this.exp = { //expected results
            lang: {
                en: 'EN',
                ru: 'RU'
            },
            
            values: {
                copyright: '© The Maf Place',
                versionContainsWord: 'Version',
                developerPrepend: 'Website by',
                developerLink: 'React Smart Development',
            }

        }
    }

    //element selector getters
    get elem() { return $('#footer') }
    get LanguageToggle() { return $('#footer-links') }
    get Copyright() { return $('#copyright-text') }
    get VersionLabel() { return $('#version-label') }
    get VersionValue() { return $('#version-value') }
    get DeveloperLink() { return $('#developer-link') }
    get DeveloperPrepend() { return $('#deeveloper-prepend') }
    get VersionContainsWord() { return $('#version-text') }

    //methods
    checkElem() {
        this.elem.waitForDisplayed();
    }

    clickLanguageToggle() {
        this.LanguageToggle.click()
    }

    clickDeveloperLink() {
        this.DeveloperLink.click()
    }

    checkLanguageToggleIsDisplayed() {
        expect(this.LanguageToggle).toBeDisplayed()
    }

    checkCopyright() {
        expect(this.Copyright).toBeDisplayed()
    }

    checkVersionLabel() {
        expect(this.VersionLabel).toBeDisplayed()
    }

    checkVersionValue() {
        expect(this.VersionValue).toBeDisplayed()
    }

    checkDeveloperLink() {
        expect(this.DeveloperLink).toBeDisplayed()
    }

    checkDeveloperPrepend() {
        expect(this.DeveloperPrepend).toBeDisplayed()
    }

    checkLanguagetogglevalueRU() {
        expect(this.LanguageToggle).toHaveText(this.exp.lang.ru)
    }

    checkCopyrightValue() {
        expect(this.Copyright).toHaveText(this.exp.values.copyright)
    }

    checkVersioncontainsword() {
        expect(this.VersionContainsWord).toHaveTextContaining(this.exp.values.versionContainsWord)
    }

    checkDeveloperPrepend() {
        expect(this.DeveloperPrepend).toHaveText(this.exp.values.developerPrepend)
    }

    checkDeveloperLink() {
        expect(this.DeveloperLink).toHaveText(this.exp.values.developerLink)
    }

    checkRuChangesToggle() {
        expect(this.LanguageToggle).toHaveText(this.exp.lang.en)
    }

    checkEnChangesToggle() {
        expect(this.LanguageToggle).toHaveText(this.exp.lang.ru)
    }
    
}

export default new Footer;