/// <reference types="cypress" />

let supplierCard = '[href="/games?provider='

export class SuppliersPage{

    static navigateToSuppliergGames (supplierName){
        cy.get(supplierCard + supplierName + '"]').click({force: true})
    }

}