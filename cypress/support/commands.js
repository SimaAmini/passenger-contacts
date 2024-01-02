const getByTestId = (selector) => {
  return cy.get(`[data-testid=${selector}]`);
};

Cypress.Commands.addAll({
  getByTestId,
});
