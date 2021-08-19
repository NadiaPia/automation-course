import Login from '../../classes/pages/login.page';
import Header from '../../classes/elements/header.elem';
import Forgot from '../../classes/pages/forgot.page';
import GameCreationTab from '../../classes/pages/game-creation-tab.page';
import GameSearchTab from '../../classes/pages/game-search-tab.page';
import InitialPage from '../../classes/pages/initial-page-page';
import NewGameTab from '../../classes/pages/new-game-tab.page';

let GameID = ''


describe('Game-creation', () => {

    before(() => {
        Login.openPage();
        Header.clickPublicGame()      
        
    })

    it('Game Creation', () => {
        NewGameTab.addPlayers(10)
        NewGameTab.clickCreateGameButton()
        GameCreationTab.checkStartBtn()
        GameID = GameCreationTab.getGameId()        
    })

    it('Game Search - not found', () => {
        GameCreationTab.clickGameSearchTab()
        GameSearchTab.setGameIDTextFieldValue('a')
        GameSearchTab.clickGameSearchBtn()
        GameSearchTab.checkErrorMsgIfIncorrectId()
    })

    it('Game Search - success', () => {
        GameSearchTab.setGameIDTextFieldValue(GameID)
        GameSearchTab.clickGameSearchBtn()
        GameSearchTab.clickContinueGameBtn()
        InitialPage.checkRedirectFromPublicGame()
        InitialPage.checkPage()
    })



})