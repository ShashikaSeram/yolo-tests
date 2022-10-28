/// <reference types="cypress" />

const URL = 'https://hub88.io/'
let supplierButton = '[href="/suppliers"]'

export class HomePage{

    
static navigateToHomePage (){
    cy.visit(URL)
    
}

static clickSuppliers (){
    cy.get(supplierButton).eq(1).click()
}

static verifyHomePage (){
    cy.title().should('eq', 'Hub88 - Seamless Wallet Integration | single API for casino operations')
}

}
