import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'

// Service Injection
Then(`the react component contains an input`, () => {
  cy.get('multiple-patterns-react .serviceInjection input').should('be.visible')
})

Then(`the react component contains a button`, () => {
  cy.get('multiple-patterns-react .serviceInjection button').should('be.visible')
})

When(`I enter the text {string}`, (text: string) => {
  cy.get('multiple-patterns-react .serviceInjection input').clear().type(text)
})

When(`I click the button`, () => {
  cy.get('multiple-patterns-react .serviceInjection button').click()
})

Then(`the service was updated with {string}`, (text: string) => {
  cy.get('#serviceInjection__UpdatedText').should('contain', text)
})

// Transclude
Then(`both transclude directives should have the same content`, () => {
  cy.get('multiple-patterns div.wrappedContentContainer').should(
    'contain.text',
    'The following content has been wrapped: Hello, World'
  )
  cy.get('multiple-patterns-react div.wrappedContentContainer').should(
    'contain.text',
    'The following content has been wrapped: Hello, World'
  )
})

// Non-leaf
Then(`the input element exists`, () => {
  cy.get('multiple-patterns-react .nonLeaf input[name="name"]').should('be.visible')
})

When(`the input text is set to {string}`, (arg0: string) => {
  cy.get('multiple-patterns-react .nonLeaf input[name="name"]').clear().type(arg0)
})

Then(`the leaf component's text is equal to {string}`, (arg0: string) => {
  cy.get('multiple-patterns-react .nonLeaf span.leaf-name').should('have.text', arg0)
})

// ToggleBtn

Then(`both buttons show the same value`, () => {
  cy.get('multiple-patterns .toggle-button__label--fade').then(($el) => {
    const value = $el.text().trim()
    cy.get('multiple-patterns-react .toggle-button__label--fade').then(($el2) => {
      const value2 = $el2.text().trim()
      expect(value).equal(value2)
    })
  })
})

When(`I toggle the {string} button`, (framework: string) => {
  const css = framework.toLowerCase() === 'angular' ? 'multiple-patterns' : 'multiple-patterns-react'
  cy.get(`${css} .toggle-button`).click()
})

Then(`the {string} button matches the parent state`, (framework: string) => {
  const css = framework.toLowerCase() === 'angular' ? 'multiple-patterns' : 'multiple-patterns-react'
  cy.get('#toggleButton__ParentState').then(($el) => {
    const parentValue = $el.text().trim()
    cy.get(`${css} .toggle-button__label--fade`).then(($el2) => {
      const childValue = $el2.text().trim() === 'A' ? 'B' : 'A' // Because "fade" means not selected
      expect(childValue).equal(parentValue)
    })
  })
})
