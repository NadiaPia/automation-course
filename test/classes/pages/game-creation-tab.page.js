import Base from '../base.class';

class GameCreationTab extends Base {

    constructor() {
        super(); //to extend Base.class constructor
        this.exp = { //expected results

            errorMsgs: {               
                
            },

            values: {
                newGameTab: 'New Game', //Should be New Game
                gameIdLabel: 'Game ID:',
                saveIdLabel: 'Save ID to continue in the future',
                gameSearchTab: 'Game Search',                               
            }

        }
    }

    //element selector getters
    get page() { return $('#public-game') }
    get startBtn() { return $('#start-game-button') }
    get gameIdLabel() { return $('#id-label') }
    get saveIdLabel() { return $('#save-id-text') }
    get gameSearchTab() { return $('#search-tab') }
    get gameSearchContainer() { return $('#search-tab') }
    get gameIDValue() { return $('#id-value') }
    
    
    /*--------------------------CHECKS and VALUES-----------------------------*/

    checkPage() {
        this.page.waitForDisplayed();
    }

    checkUrl() {
        expect(browser).toHaveUrl(this.baseExp.url.PublicGame)
    }

    checkStartBtn() {
        expect(this.startBtn).toBeDisplayed()
    }

    checkGameIdLabel() {
        expect(this.gameIdLabel).toBeDisplayed()
    }

    checkSaveIdLabel() {
        expect(this.saveIdLabel).toBeDisplayed()
    }

    checkGameIdLabelValue() {
        expect(this.gameIdLabel).toHaveText(this.exp.values.gameIdLabel)
    }

    checkSaveIdLabelValue() {
        expect(this.saveIdLabel).toHaveText(this.exp.values.saveIdLabel)
    }
    
    checkGameSearchContainer() {
        this.gameSearchContainer.waitForDisplayed()
        
    }

    getGameId() {
        return this.gameIDValue.getText()
    }

    /*--------------------------CLICKS-----------------------------*/

    clickGameSearchTab() {
        this.gameSearchTab.click()
    }
    
    clickStartBtn() {
        this.startBtn.click()
    }

}

export default new GameCreationTab;