import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';

Given(`I am on the transclude parity page`, () => {
    cy.visit('#!/transclude');
});

Then(`both transclude directives should have the same content`, () => {
    cy.get('wrapper div.wrappedContentContainer').should('have.text', 'The following content has been wrapped:Hello, WorldThe end');
    cy.get('wrapper-react div.wrappedContentContainer').should('have.text', 'The following content has been wrapped:Hello, WorldThe end');
});