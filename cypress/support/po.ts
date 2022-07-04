export const intercept = () => {

  cy.intercept('GET', 'assets/api/auth/2-flow.json?=[object%20Object]',
    {statusCode: 200, fixture: '/auth.json'})
    .as('GET-auth');

  cy.intercept('GET', 'assets/api/report/sale/sales.json',
    {statusCode: 200, fixture: 'sales.json'})
    .as('GET-sales');

}

export const navigate = () => {
  intercept();
  cy.visit('/');
}
