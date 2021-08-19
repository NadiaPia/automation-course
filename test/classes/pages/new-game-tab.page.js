import Base from '../base.class';

class NewGameTab extends Base {

    constructor() {
        super(); //to extend Base.class constructor
        this.exp = { //expected results

            
            values: {
                newGameTab: 'New Game', //Should be New Game
                gameSearchTab: 'Game Search',
                addPlayersPlaceholder: 'Nickname/Name',
                checkBoxText: 'Random seating numbers',
                addPlayersButton: 'Add',
                tableHead: 'Game',
                addPlayerMsg: 'Add players to create a game',
                createGameButton: 'Create Game',
                popUpMessage: 'Add 10 players to start a game',
            }

        }
    }

    //element selector getters
    get page() { return $('#public-game') }
    get newGameTab() { return $('#new-game-tab') }
    get gameSearchTab() { return $('#search-tab') }
    get maleButton() { return $('[alt="male"]') }
    get femaleButton() { return $('[alt="female"]') }
    get addPlayerField() { return $('#add_player_field') }
    get addPlayerButton() { return $('#add_player_button') }
    get randomSeatingCheckBox() { return $('#random-seating') }
    get tableHead() { return $('thead tr th') }
    get tableFirstRow() { return $('#public-game tbody tr td') }
    get createGameButton() { return $('#create-game-button') }
    get contentmiddle() { return $('.content-middle') }
    get popUpMsgAdd10Players() { return $('.custom-tooltiptext') }
    get tableFirstFilledRow() { return $('#public-game tbody tr td:nth-child(2)') }
    get tableBody() { return $('#public-game tbody') }
    get tableAllCells() { return $$('#public-game tbody tr td') }
    get tableAllRows() { return $('#public-game tbody').$$('tr') }


    //methods

    openPage() {
        browser.url('/public-game');
    }

    // -------------------------- CHECKS and VALUES ----------------------------- 

    checkPage() {
        this.page.waitForDisplayed();
    }

    checkNewGameTab() {
        expect(this.newGameTab).toBeDisplayed()
    }

    checkGameSearchTab() {
        expect(this.gameSearchTab).toBeDisplayed()
    } 

    checkMaleButton() {
        expect(this.maleButton).toBeDisplayed()
    }

    checkFemaleButton() {
        expect(this.femaleButton).toBeDisplayed()
    }

    checkAddPlayerField() {
        expect(this.addPlayerField).toBeDisplayed()
    }

    checkAddPlayerButton() {
        expect(this.addPlayerButton).toBeDisplayed()
    }

    checkRandomSeatingCheckBox() {
        expect(this.randomSeatingCheckBox).toBeDisplayed()
    }

    checkCreateGameButton() {
        expect(this.createGameButton).toBeDisplayed()
    }

    checkTableHead() {
        expect(this.tableHead).toBeDisplayed()
    }

    checkTableFirstRow() {
        expect(this.tableFirstRow).toBeDisplayed()
    }

    newGameTabValue() {
        expect(this.newGameTab).toHaveText(this.exp.values.newGameTab)
    }

    gameSearchTabValue() {
        expect(this.gameSearchTab).toHaveText(this.exp.values.gameSearchTab)
    }

    checkaddPlayerField() {
        expect(this.addPlayerField).toHaveAttribute('placeholder', this.exp.values.addPlayersPlaceholder)
    }

    CheckBoxValue() {
        expect(this.contentmiddle).toHaveText(this.exp.values.checkBoxText)
    }

    CheckAddPlayerButtonValue() {
        expect(this.addPlayerButton).toHaveText(this.exp.values.addPlayersButton)
    }

    CheckTableHeadValue() {
        expect(this.tableHead).toHaveText(this.exp.values.tableHead)
    }

    CheckAddPlayerMsg() {
        expect(this.tableFirstRow).toHaveText(this.exp.values.addPlayerMsg)
    }

    CheckCreateGameButton() {
        expect(this.createGameButton).toHaveText(this.exp.values.createGameButton)
    }

    checkPopUpMsgAppearsOnHover() {
        const wCenter = this.createGameButton.getCSSProperty('width').parsed.value / 2
        const hCenter = this.createGameButton.getCSSProperty('height').parsed.value / 2
        this.createGameButton.moveTo({ xOffset: wCenter, yOffset: hCenter })
        this.popUpMsgAdd10Players.waitForDisplayed()//toBeDisplayed()
        expect(this.popUpMsgAdd10Players).toHaveText(this.exp.values.popUpMessage)
    }

    checkPopUpMsgDisappears() {
        this.createGameButton.moveTo({ xOffset: -1, yOffset: -1 })
        this.popUpMsgAdd10Players.waitForDisplayed({ reverse: true })
    }

    checkPlayerAppearsInTable() {
        expect(this.tableFirstFilledRow).toHaveText('a')
    }

    checkNumberOfRows(num) {
        expect(this.tableBody).toHaveChildren(num)
        // expect(this.tableAllRows).toBeElementsArrayOfSize(10) - another way
    }

    checkNumberOfCells(num) {
        expect(this.tableAllCells).toBeElementsArrayOfSize(num)        
    }

    checkCreateGameBtnActive() {
        expect(this.createGameButton).toBeEnabled()
    }

    
    
    

    //---------------------------CLICKS---------------------------------------------
    
    clickmaleButton() {
        this.maleButton.click()
    }

    clickfemaleButton() {
        this.femaleButton.click()
    }    

    clickAddPlayerButton() {
        this.addPlayerButton.click()
    }

    clickRandomSeatingCheckBox() {
        this.randomSeatingCheckBox.click()
    }

    clickCreateGameButton() {
        this.createGameButton.click()
    }

  //---------------------------SETS---------------------------------------------
    setNameValue(str) {
        this.addPlayerField.setValue(str)
    }
    
    addPlayers(num) {
        for (let i = 1; i <= num; i++) {
            this.setNameValue(`player-${i}`)
            this.clickAddPlayerButton()
        }
    }   
    
}

export default new NewGameTab;