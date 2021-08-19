import GameCreationTab from "../../classes/pages/game-creation-tab.page";
import Login from "../../classes/pages/login.page";
import Header from "../../classes/elements/header.elem";
import NewGameTab from "../../classes/pages/new-game-tab.page";
/*let GameID = ''*/

describe('Elements', () => {

    before(() => {
        Login.openPage();
        Header.clickPublicGame()
        NewGameTab.addPlayers(10)
        NewGameTab.clickCreateGameButton()        
    })
   
    it('Public Game Open With Correct Url', () => {
        GameCreationTab.checkUrl()
        GameCreationTab.checkPage()
    })

    it('StartGameBtn', () => {
        GameCreationTab.checkStartBtn()
    })

    it('Game ID Label', () => {
        GameCreationTab.checkGameIdLabel()
    })

    it('Save ID Label', () => {
        GameCreationTab.checkSaveIdLabel()
    })       
    
})

describe('Values', () => {

    it('Check ID Game', () => {
        GameCreationTab.checkGameIdLabelValue()        
    })

    it('Check Save ID', () => {
        GameCreationTab.checkSaveIdLabelValue()
    })

})

describe('Functionality', () => {
    
    it('GameSearchContainer', () => {
        GameCreationTab.clickGameSearchTab()
        GameCreationTab.checkGameSearchContainer()
    })
    
})