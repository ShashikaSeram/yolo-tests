/// <reference types="cypress" />

import { TIMEOUT_SHORT } from '../../support/constants'

let searchBar = '[placeholder="Search"]'
let doublinGold = '[href="/game/1622?provider='
let gameItem = '[class="jsx-2149759421 item"]'
let h2 = 'h2'
let p = 'p'
let numberOfGamesLabel = 'span[class="jsx-1859802056"]'
let h1 = 'h1'
let loadMoreButton = '.jsx-1859802056 > .jsx-2819872128'

export class GamesPage {

    static verifySupplierGamesListed(supplierName) {
        cy.get(h1).contains(supplierName)
    }

    static searchGame(gameName) {
        cy.get(searchBar).click().type(gameName)
    }

    static verifyGameCard(supplierName) {
        //passing supplierName to the doublinGold element
        var updatedName = supplierName.split(' ').join('+');
        cy.get(doublinGold + updatedName + '"]').should('be.visible')
    }

    static verifyNumberOfGameCardsDisplayed(gameCount) {
        cy.get(gameItem).should('have.length', gameCount)
    }

    static verifyGameNameOntheCard(gameName) {
        cy.get(h2).contains(gameName)
    }

    static verifySupplierNameOntheCard(supplierName) {
        cy.get(p).contains(supplierName)
    }

    static verifyGameCounterLabel(gameCount) {
        //verifying if the game counter lable is getting updated when searching games
        cy.get(numberOfGamesLabel).should('contain', gameCount).and('contain', ' games')
    }

    static clearSearchField() {
        cy.get(searchBar).type('{backspace}')
    }

    static clickLoadMoreButton() {
        cy.get(loadMoreButton).click()
    }

    static clickLoadMoreButtonMultipleTimes = () => {
        cy.get('body').then($body => {
            const isVisible = $body.find(loadMoreButton).is(':visible');
            if (isVisible) {
                this.clickLoadMoreButton()
                cy.wait(TIMEOUT_SHORT);
                this.clickLoadMoreButtonMultipleTimes();
            }
        });
    }

    static verifyTheCountOfLoadedGames() {
        let noOfGameCards;
        cy.get(gameItem).then($elements => {
            noOfGameCards = $elements.length;
            cy.log('Games were Loaded : ' + noOfGameCards)
            cy.get(numberOfGamesLabel).should('contain', noOfGameCards)
        });

    }


}