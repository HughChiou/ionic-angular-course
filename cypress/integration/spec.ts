it('loads ionic page', () => {
  cy.visit('/');
  cy.contains('Start with Ionic');
});

it('loads ionic page', () => {
  cy.viewport('iphone-xr');
  cy.visit('/');
  cy.get('.button').click();
  cy.contains('Start with Ionic').should('not.exist');
  cy.contains('Whatever').should('exist');
});
