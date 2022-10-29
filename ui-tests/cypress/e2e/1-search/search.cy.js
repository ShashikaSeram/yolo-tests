/// <reference types="Cypress" />

import { HomePage } from '../../support/pages/home-page'
import { SuppliersPage } from '../../support/pages/suppliers-page'
import { GamesPage } from '../../support/pages/games-page'

const boomingGames = "Booming Games"
const doublinGold = "Doublin Gold"
const cherryBombDeluxe = "Cherry Bomb Deluxe"
const stickyBombs = "Sticky Bombs"
const barnyardTwister = "Barnyard Twister"
const zoodiac = "Zoodiac"
const wizardingWins = "Wizarding Wins"
const catrina = "Oh Catrina!"

describe('Test Search Feature', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test cause of xhr errors in app
    return false
  })

  beforeEach(() => {
    HomePage.navigateToHomePage()
    HomePage.verifyHomePage()
    HomePage.clickSuppliers()
    HomePage.verifyHomePage()
    SuppliersPage.navigateToSuppliergGames(boomingGames)
    GamesPage.verifySupplierGamesListed(boomingGames)
  })

  it('Verify user is able to search games entering the full game name', () => {
    GamesPage.searchGame(doublinGold)
    GamesPage.verifyGameCard(boomingGames)
    GamesPage.verifyNumberOfGameCardsDisplayed('1')
    GamesPage.verifyGameNameOntheCard(doublinGold)
    GamesPage.verifySupplierNameOntheCard(boomingGames)
    GamesPage.verifyGameCounterLabel('1')
  })

  it('Verify user is able to search games entering one word', () => {
    GamesPage.searchGame('bomb')
    GamesPage.verifyNumberOfGameCardsDisplayed('2')
    GamesPage.verifyGameNameOntheCard(cherryBombDeluxe)
    GamesPage.verifySupplierNameOntheCard(boomingGames)
    GamesPage.verifyGameNameOntheCard(stickyBombs)
    GamesPage.verifySupplierNameOntheCard(boomingGames)
    GamesPage.verifyGameCounterLabel('2')
  })

  it('Verify user is able to search games entering just two letters', () => {
    GamesPage.searchGame('ny')
    GamesPage.verifyNumberOfGameCardsDisplayed('1')
    GamesPage.verifyGameNameOntheCard(barnyardTwister)
    GamesPage.verifySupplierNameOntheCard(boomingGames)
    GamesPage.verifyGameCounterLabel('1')
  })

  it('Verify user is able to search games entering one letter', () => {
    GamesPage.searchGame('z')
    GamesPage.verifyNumberOfGameCardsDisplayed('7')
    GamesPage.verifyGameNameOntheCard(zoodiac)
    GamesPage.verifySupplierNameOntheCard(boomingGames)
    GamesPage.verifyGameNameOntheCard(wizardingWins)
    GamesPage.verifySupplierNameOntheCard(boomingGames)
    GamesPage.verifyGameCounterLabel('7')
  })

  //this test will fail because of the existing bug, displays an error message when searching unavailable games
  it('Verify no games are displayed when searching unavailable games', () => {
    GamesPage.searchGame('vy')
    GamesPage.verifyGameCounterLabel('0')
    GamesPage.verifyNumberOfGameCardsDisplayed('0')
  })

  it('Verify relevant games are displayed when clearing the search field', () => {
    GamesPage.searchGame('cat')
    GamesPage.verifyNumberOfGameCardsDisplayed('1')
    GamesPage.verifyGameNameOntheCard(catrina)
    GamesPage.verifySupplierNameOntheCard(boomingGames)
    GamesPage.verifyGameCounterLabel('1')
    GamesPage.clearSearchField()
    GamesPage.verifyNumberOfGameCardsDisplayed('8')
    GamesPage.verifyGameCounterLabel('8')
    GamesPage.clearSearchField()
    GamesPage.verifyNumberOfGameCardsDisplayed('24')
    GamesPage.verifyGameCounterLabel('24')
  })

  it('Verify more game are displayed when clicking the LOAD MORE button ', () => {
    GamesPage.clickLoadMoreButton()
    GamesPage.verifyNumberOfGameCardsDisplayed('48')
    GamesPage.verifyGameCounterLabel('48')
  })

  it('Verify the ability to load all games of a Supplier', () => {
    GamesPage.clickLoadMoreButtonMultipleTimes()
    GamesPage.verifyTheCountOfLoadedGames()

  })

})