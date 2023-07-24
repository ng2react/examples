import { Given } from '@badeball/cypress-cucumber-preprocessor'

Given(`the {string} page is loaded`, (page: string) => {
    cy.clearAllLocalStorage()
    cy.visit(`#!/${page}`)
})