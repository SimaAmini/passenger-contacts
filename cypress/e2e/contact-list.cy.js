const URL = Cypress.env("BASE_URL");
const LOCATION = "/";
const TABLE = "table-component";
const API_URL = `${Cypress.env("MAIN_URL")}/passenger/*`;

function visitPage() {
  cy.visit(LOCATION);
  cy.location("pathname", { timeout: 20000 }).should("eq", LOCATION);
}

function establishRequests() {
  cy.intercept("GET", API_URL, (req) => {
    req.headers["cache-control"] = "no-cache"; // to make the cache go away
  }).as("getContactList");
}

describe("Contact List", () => {
  beforeEach(() => {
    visitPage();
    establishRequests();
  });

  it("URL should match the home page", () => {
    cy.url().should("eq", URL);
  });

  it("should navigate to the detail page ", () => {
    cy.getByTestId("table-row").first().click();
    cy.url().should("match", /\/contact\/\d+/);
  });

  it("should contact list api work as expected", () => {
    cy.wait("@getContactList", { timeout: 20000 }).then(
      ({ request, response }) => {
        expect(response.statusCode).to.eq(200);
      },
    );
  });

  it("should contact list be visible", () => {
    cy.getByTestId(TABLE).should("be.visible");
  });
});
