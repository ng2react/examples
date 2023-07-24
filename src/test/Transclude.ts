import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Then(`both transclude directives should have the same content`, () => {
  cy.get('wrapper div.wrappedContentContainer').should(
    'have.text',
    'The following content has been wrapped:Hello, WorldThe end'
  )
  cy.get('wrapper-react div.wrappedContentContainer').should(
    'have.text',
    'The following content has been wrapped:Hello, WorldThe end'
  )
})
