/// <reference types="cypress" />

let supplierCard = '[href="/games?provider='

export class SuppliersPage {

    static navigateToSuppliergGames(supplierName) {
        var updatedName = supplierName.split(' ').join('+');
        cy.get(supplierCard + updatedName + '"]').click({ force: true })
    }

}