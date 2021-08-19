import NewGameTab from '../../classes/pages/new-game-tab.page.js';


describe('Elements', () => {

    before(() => {
        NewGameTab.openPage();
    })

    
    it('Page loaded', () => {
        NewGameTab.checkPage()

    })

    it('New Game Tab', () => {
        NewGameTab.checkNewGameTab()

    })

    it('Game Search Tab', () => {
        NewGameTab.checkGameSearchTab()

    })

    it('Male Button', () => {
        NewGameTab.checkMaleButton()

    })

     it('Female Button', () => {
        NewGameTab.checkFemaleButton()

     })
    
    it('Add Player Field', () => {
        NewGameTab.checkAddPlayerField()

    })

    it('Add Player Button', () => {
        NewGameTab.checkAddPlayerButton()

    })

    it('Random Seating Check Box', () => {
        NewGameTab.checkRandomSeatingCheckBox()

    })

    it('Table Head', () => {
        NewGameTab.checkTableHead()

    })

    it('Table First Row', () => {
        NewGameTab.checkTableFirstRow()

    })

    

})

describe('Values', () => {

    it('New Game Tab', () => {
        NewGameTab.newGameTabValue()

    })

    it('Game Search Tab', () => {
        NewGameTab.gameSearchTabValue()

    })

    it('Add Player Placeholder', () => {
        NewGameTab.checkaddPlayerField()

    })

    it('Check Box Value ', () => {
        NewGameTab.CheckBoxValue()

    })

    it('Add Player Button ', () => {
        NewGameTab.CheckAddPlayerButtonValue()

    })

    it('Table Head Value ', () => {
        NewGameTab.CheckTableHeadValue()

    })

    it('Add Player Msg ', () => {
        NewGameTab.CheckAddPlayerMsg()

    })

    it('Create Game Button ', () => {
        NewGameTab.CheckCreateGameButton()

    })

   
})

describe('Functionality', () => {

    it('Pop Up Msg Appears', () => {
        NewGameTab.checkPopUpMsgAppearsOnHover()    
    })

    it('Pop Up Msg Disappears ', () => {
         NewGameTab.checkPopUpMsgDisappears()
    })
    
    it('Player added to the Table', () => {
        NewGameTab.setNameValue('a')
        NewGameTab.clickAddPlayerButton()
        NewGameTab.checkPlayerAppearsInTable()
    })

    it('Add 10 players', () => {
        NewGameTab.openPage()
        NewGameTab.addPlayers(10)
        NewGameTab.checkNumberOfRows(10)
    })

    it('check Table has 30 cells', () => {
        NewGameTab.checkNumberOfCells(30)
    })

    it('check Create Game Btn Active', () => {
        NewGameTab.checkCreateGameBtnActive()
    })
    
    
})