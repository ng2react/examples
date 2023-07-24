import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Then(`I should see the {string} list`, (framework: string) => {
  const css = framework.toLowerCase() === 'react' ? 'todo-list-react' : 'todo-list'
  cy.get(`${css}`).should('be.visible')
})

Then(`both lists contain the same items`, () => {
  cy.get('todo-list').then(($element) => {
    const ngText = $element.text().trim().replaceAll(/\s+/g, '')
    cy.get('todo-list-react').then(($element2) => {
      const reactText = $element2.text().trim().replaceAll(/\s+/g, '')
      expect(ngText).equal(reactText)
    })
  })
})

When(`I add a todo item {string} to the {string} list`, (listItemText: string, framework: string) => {
  const css = framework.toLowerCase() === 'react' ? 'todo-list-react' : 'todo-list'
  cy.get(`${css} input`).type(listItemText)
  cy.get(`${css} button.todoList__addItemBtn`).click()
})

Then(`I should see the todo item {string} in the {string} list`, (listItemText: string, framework: string) => {
  const css = framework.toLowerCase() === 'react' ? 'todo-list-react' : 'todo-list'
  cy.get(`${css} li`).last().contains(listItemText)
})

Given(`the list is not empty`, () => {
  cy.get('todo-list').find('li').should('have.length', 3)
})

When(`I remove an item from the {string} list`, (framework: string) => {
  const css = framework.toLowerCase() === 'react' ? 'todo-list-react' : 'todo-list'
  cy.get(`${css} li`).last().find('button').click()
})

Then(`the item is removed from the {string} list`, (framework: string) => {
  const css = framework.toLowerCase() === 'react' ? 'todo-list-react' : 'todo-list'
  cy.get('todo-list').find('li').should('have.length', 2)
})
