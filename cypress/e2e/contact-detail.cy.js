const URL = `${Cypress.env("BASE_URL")}contact/*`;

const LOCATION = "/";
const API_URL = `${Cypress.env("MAIN_URL")}/passenger/*`;

function visitPage() {
  cy.visit(LOCATION);
  cy.location("pathname", { timeout: 20000 }).should("eq", LOCATION);
}

function establishRequests() {
  cy.intercept("GET", API_URL, (req) => {
    req.headers["cache-control"] = "no-cache"; // to make the cache go away
  }).as("getContactDetail");
}

function goToDetailPage() {
  cy.getByTestId("table-row").first().click();
}

describe("Contact detail", () => {
  beforeEach(() => {
    visitPage();
    establishRequests();
    goToDetailPage();
  });

  it("URL should match the detail page", () => {
    cy.url().should("match", /\/contact\/\d+/);
  });

  it("should contact api work as expected", () => {
    cy.wait("@getContactDetail", { timeout: 20000 }).then(
      ({ request, response }) => {
        expect(response.statusCode).to.eq(200);
      },
    );
  });

  // TODO: check if data is rendered properly
});
