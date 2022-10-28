/// <reference types="Cypress" />

import { HomePage } from '../../support/pages/home-page'
import { SuppliersPage } from '../../support/pages/suppliers-page'
import { GamesPage } from '../../support/pages/games-page'

describe('Test Search Feature', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
  beforeEach(() => {
   HomePage.navigateToHomePage()
   HomePage.verifyHomePage()
   HomePage.clickSuppliers()
   HomePage.verifyHomePage()
   SuppliersPage.navigateToSuppliergGames('Booming+Games')
   GamesPage.verifySupplierGamesListed('Booming Games')
  })
  
  it('verify user is able to search games entering the full game name', () => {
    GamesPage.searchGame('Doublin Gold')
    GamesPage.verifySearchResult('Booming+Games','Doublin Gold','1')

  })

  it('verify user is able to search games entering one word', () => {
    GamesPage.searchGame('bomb')
    GamesPage.verifySearchResult('Booming+Games','bomb','2')

  })
  //test the behavior with adding one word when the game has two
  //it('Test Case 02', () => {
  //   cy.get('[placeholder="Search"]').click()
  //   cy.get('[placeholder="Search"]').type('bomb')
  //   cy.get('a[href="/game/1600?provider=Booming+Games"]').should('be.visible')
  //   cy.get('a[href="/game/16036?provider=Booming+Games"]').should('be.visible')
  //   cy.get('[class="jsx-2149759421 item"]').should('have.length', 2)
  //   cy.get('h2').contains('Cherry Bomb Deluxe')
  //   cy.get('p').contains('Booming Games')
  //   cy.get('h2').contains('Sticky Bombs')
  //   cy.get('p').contains('Booming Games')
  //   cy.get('span[class="jsx-1859802056"]').should('contain','2').and('contain',' games')
   
  //  })
})
