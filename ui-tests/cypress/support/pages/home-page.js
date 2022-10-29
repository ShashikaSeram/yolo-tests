/// <reference types="cypress" />

let supplierButton = '[href="/suppliers"]'

export class HomePage {

    static navigateToHomePage() {
        cy.visit(Cypress.env('hub88_url'))
    }

    static clickSuppliers() {
        cy.get(supplierButton).eq(1).click()
    }

    static verifyHomePage() {
        cy.title().should('eq', 'Hub88 - Seamless Wallet Integration | single API for casino operations')
    }

}
