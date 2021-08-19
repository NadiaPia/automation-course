import Base from '../base.class';

class GameSearchTab extends Base {

    constructor() {
        super(); //to extend Base.class constructor
        this.exp = { //expected results

            errorMsgs: {
                incorrectGameId: 'No game with this ID or it was ended',
            },

            values: {
                GameIDPlaceholder: 'Game ID',
                SearchGameBtn: 'Search',
                gameSearchTab: 'Game Search',
            }
        }
    }

    //element selector getters
    get page() { return $('#public-game') }
    get gameSearchTab() { return $('#search-tab') }
    get gameSearchContainer() { return $('#search-tab') }
    get gameIDTextField() { return $('#search_game_field') }
    get searchGameBtn() { return $('#search_game_button') }
    get errorMsg() { return $('div#search-tab > div:nth-child(2)') }
    get gameInfoCard() { return $('#search-result') }
    get continueGameBtn() { return $('#start_game_button') }
    
    
    checkGameSearchContainer() {
        this.gameSearchContainer.waitForDisplayed()
    }

    clickGameSearchBtn() {
        this.searchGameBtn.click()
    }

    checkSearchGameButton() {
        expect(this.searchGameBtn).toBeDisplayed()
    }

    /*checkGameInfoCard() {
        expect(this.gameInfoCard).toBeDisplayed()
    }*/

    checkGameSearchTabValue() {
        expect(this.gameSearchTab).toHaveText(this.exp.values.gameSearchTab)
    }

    checkGameIDPlaceholderValue() {
        expect(this.gameIDTextField).toHaveAttribute('placeholder', this.exp.values.GameIDPlaceholder)
    }

    checkSearchGameBtnValue() {
        expect(this.searchGameBtn).toHaveText(this.exp.values.SearchGameBtn)
    }

    setGameIDTextFieldValue(str) {
        this.gameIDTextField.setValue(str)
    }

    checkErrorMsgIfIncorrectId() {
        this.errorMsg.waitForDisplayed()
        expect(this.errorMsg).toHaveText(this.exp.errorMsgs.incorrectGameId)
    }

    checkGameInfoCard() {
        this.gameInfoCard.waitForDisplayed()
    }

    checkContinueGameBtn() {
        this.continueGameBtn.waitForDisplayed()
    }

    clickContinueGameBtn() {
        this.continueGameBtn.click()
    }

    
    

}
    
export default new GameSearchTab;