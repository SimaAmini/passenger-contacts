const LOCATION = "/";

function visitPage() {
  cy.visit(LOCATION);
  cy.location("pathname", { timeout: 20000 }).should("eq", LOCATION);
}

function fillTheForm() {
  cy.getByTestId("search-input").type("Albert");
  cy.getByTestId("search-select").select(0);
}

describe("Contact search", () => {
  beforeEach(() => {
    visitPage();
  });

  it("search box exists", () => {
    cy.getByTestId("search-box").should("be.visible");
    cy.getByTestId("search-box").should("exist");
  });

  it("Submiting search form", () => {
    fillTheForm;

    cy.getByTestId("search-submit-button").click();
  });

  it("Clear search form", () => {
    fillTheForm;
    cy.getByTestId("search-clear-button").click();
    cy.getByTestId("search-input").should("have.value", "");
    cy.getByTestId("search-select").should("have.value", "lastName");
  });
});
