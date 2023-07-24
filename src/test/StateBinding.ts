import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

type RequiredBindType = '1-way' | '2-way' | `String`
type BindingType = RequiredBindType | `Optional ${RequiredBindType}`

const stateBox = (name: BindingType) => cy.get(`#parentState input[name="${name}"]`)
const reactStateBox = (name: BindingType) => cy.get(`state-binding-example-react input[name="${name}"]`)

When(`the parent {string} binding state is changed`, (name: BindingType) => {
  if (name.includes('String')) {
    stateBox(name).clear().type('Hello Child')
  } else {
    stateBox(name).click()
  }
})

Then(`the child {string} binding state in the React component should be updated`, (name: BindingType) => {
  if (name.includes('String')) {
    reactStateBox(name).should('have.value', 'Hello Child')
  } else {
    stateBox(name).then(($el) => {
      const value = $el.prop('checked')
      reactStateBox(name).then(($el2) => {
        const value2 = $el2.prop('checked')
        expect(value).equal(value2)
      })
    })
  }
})

When(`the child {string} binding state is changed`, (name: BindingType) => {
  if (name.includes('String')) {
    stateBox(name).clear().type('Initial')
    reactStateBox(name).clear().type('Hello Parent')
  } else {
    stateBox(name).check()
    reactStateBox(name).uncheck()
  }
})

Then(`the parent {string} binding state should be updated`, (name: BindingType) => {
  if (name.includes('String')) {
    stateBox(name).should('have.value', 'Hello Parent')
  } else {
    reactStateBox(name).then(($el) => {
      const value = $el.prop('checked')
      stateBox(name).then(($el2) => {
        const value2 = $el2.prop('checked')
        expect(value).equal(value2)
      })
    })
  }
})

Then(`the parent {string} binding state should not be updated`, (name: BindingType) => {
  if (name.includes('String')) {
    stateBox(name).should('have.value', 'Initial')
  } else {
    reactStateBox(name).then(($el) => {
      const value = $el.prop('checked')
      stateBox(name).then(($el2) => {
        const value2 = $el2.prop('checked')
        expect(value).equal(!value2)
      })
    })
  }
})
