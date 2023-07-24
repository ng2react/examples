import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'

type Name = 'name' | 'status'
type Component = 'React' | 'Parent'
const getInput = (component: Component, name: Name) => {
  const css = component === 'React' ? 'require-controller-example-react' : '#ParentState'
  return cy.get(`${css} input[name="${name}"]`)
}

When(`the {string} on the {string} component is set to {string}`, (name: Name, component: Component, value: string) => {
  getInput(component, name).clear().type(value)
})

Then(
  `the {string} on the {string} component is equal to {string}`,
  (name: Name, component: Component, value: string) => {
    getInput(component, name).should('have.value', value)
  }
)

When(`the update button is clicked on the {string} component`, (component: Component) => {
  const css = component === 'React' ? 'require-controller-example-react' : 'require-controller-example'
  cy.get(`${css} button`).click()
})
