import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';

Given(`the non-leaf page is loaded`, () => {
    cy.visit('#!/non-leaf');
});

Then(`the input element exists`, () => {
    cy.get('non-leaf-react input[name="name"]').should('be.visible');
});

When(`the input text is set to {string}`, (arg0: string) => {
    cy.get('non-leaf-react input[name="name"]').clear().type(arg0);
});

Then(`the leaf component's text is equal to {string}`, (arg0: string) => {
    cy.get('non-leaf-react span.leaf-name').should('have.text', arg0);
});