import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'

Then(`the react component contains an input`, () => {
  cy.get('service-injection-example-react input').should('be.visible')
})

Then(`the react component contains a button`, () => {
  cy.get('service-injection-example-react button').should('be.visible')
})

When(`I enter the text {string}`, (text: string) => {
  cy.get('service-injection-example-react input').clear().type(text)
})

When(`I click the button`, () => {
  cy.get('service-injection-example-react button').click()
})

Then(`the service was updated with {string}`, (text: string) => {
  cy.get('#UpdatedText').should('contain', text)
})
