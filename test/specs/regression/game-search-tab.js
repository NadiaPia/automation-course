import GameSearchTab from "../../classes/pages/game-search-tab.page";
import GameCreationTab from "../../classes/pages/game-creation-tab.page";
import Login from "../../classes/pages/login.page";
import Header from "../../classes/elements/header.elem";
import NewGameTab from "../../classes/pages/new-game-tab.page";

let GameID = ''
    
describe('Elements', () => {

    before(() => {
        Login.openPage();
        Header.clickPublicGame()
        NewGameTab.addPlayers(10)
        NewGameTab.clickCreateGameButton()
        GameID = GameCreationTab.getGameId()
        GameCreationTab.clickGameSearchTab()
        
    })

    it('Check Game ID text field', () => {
            GameSearchTab.checkGameSearchContainer()
    })
    
    it('Check Search Game Button', () => {
            GameSearchTab.checkSearchGameButton()
    })    

})

describe('Values', () => {

    it('Check Game Search Tab Value', () => {
         GameSearchTab.checkGameSearchTabValue()
    })

    it('Check Game ID Placeholder', () => {
        GameSearchTab.checkGameIDPlaceholderValue()
    })

    it('Search Game Btn Value', () => {
        GameSearchTab.checkSearchGameBtnValue()
    })

})

describe('Functionality', () => {

    it('ErrorMsg If Incorrect ID', () => {
        GameSearchTab.setGameIDTextFieldValue('a')
        GameSearchTab.clickGameSearchBtn()
        GameSearchTab.checkErrorMsgIfIncorrectId()
    })

    it('If Correct ID', () => {
        GameSearchTab.setGameIDTextFieldValue(GameID)
        GameSearchTab.clickGameSearchBtn()
        GameSearchTab.checkGameInfoCard()
        })

})




