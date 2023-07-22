import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor'

Given(`I am on the toggle button page`, () => {
  cy.visit('/#!/toggle-btn')
})

Then(`both buttons show the same value`, () => {
  cy.get('toggle-button .toggle-button__label--fade').then(($el) => {
    const value = $el.text().trim()
    cy.get('toggle-button-react .toggle-button__label--fade').then(($el2) => {
      const value2 = $el2.text().trim()
      expect(value).equal(value2)
    })
  })
})

When(`I toggle the {string} button`, (framework: string) => {
  const css = framework.toLowerCase() === 'angular' ? 'toggle-button' : 'toggle-button-react'
  cy.get(`${css} .toggle-button`).click()
})

Then(`the {string} button matches the parent state`, (framework: string) => {
  const css = framework.toLowerCase() === 'angular' ? 'toggle-button' : 'toggle-button-react'
  cy.get('#ParentState').then(($el) => {
    const parentValue = $el.text().trim()
    cy.get(`${css} .toggle-button__label--fade`).then(($el2) => {
      const childValue = $el2.text().trim() === 'A' ? 'B' : 'A' // Because "fade" means not selected
      expect(childValue).equal(parentValue)
    })
  })
})
