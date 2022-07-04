export const auth = (user: string, password: string) => {
  cy.get('#mat-input-0').click().type(`${user}`);
  cy.get('#mat-input-1').click().type(`${password}`);
  cy.get('app-shared-button > .mat-focus-indicator').click();
}

export const selectCovenant = () => {
  cy.get('app-shared-form-field-select > .mat-form-field > ' +
    '.mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click();
  cy.get('#mat-option-0 > .mat-option-text').click();
}
