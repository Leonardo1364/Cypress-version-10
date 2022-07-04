import * as authCommands from '../support/auth.commands.ts';

describe('Cypress version 10', () => {
  it('should access baseUrl', () => {
    cy.visit('/');
  })

  it('should authenticate successfully', () => {
    authCommands.auth('rgarcia', 'teste123');
    authCommands.selectCovenant();
  });
})
