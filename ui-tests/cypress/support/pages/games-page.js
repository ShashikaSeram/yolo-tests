/// <reference types="cypress" />

let searchBar = '[placeholder="Search"]'
let doublinGold = '[href="/game/1622?provider='
let gameItem = '[class="jsx-2149759421 item"]'
let h2 = 'h2'
let p = 'p'
let numberOfGamesLable = 'span[class="jsx-1859802056"]'
let h1 = 'h1'

export class GamesPage{

    static verifySupplierGamesListed(supplierName){
        cy.get(h1).contains(supplierName)
    }

    static searchGame (gameName){
        cy.get(searchBar).click().type(gameName)
    }

    static verifySearchResult (supplierName,gameName,gameCount){
        //here passing supplierName to the doublinGold element
        cy.get(doublinGold + supplierName + '"]').should('be.visible')
        //here verifying the number of game cards displayed
        cy.get(gameItem).should('have.length', gameCount)
        cy.get(h2).contains(gameName)
        //here replacing plus sign inside the supplierName with a space
        var updatedName =  supplierName.split('+').join(' ');
        cy.get(p).contains(updatedName)
        //here verifying if the game counter lable is getting updated when searching games
        cy.get(numberOfGamesLable).should('contain',gameCount).and('contain',' games')
    }

}