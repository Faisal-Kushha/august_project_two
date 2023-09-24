/// <reference types= "cypress" />

// cy.on("uncaught:exception", (e) => {
//   return false;
// });

describe("template spec", () => {
  it("passes", () => {
    let websites = [
      "https://www.almosafer.com/ar",
      "https://www.almosafer.com/en",
    ];

    let RandomIndex = Math.floor(Math.random() * websites.length);
    cy.wait(1000);
    cy.visit(websites[RandomIndex]);

    cy.get(".cta__saudi").click();

    cy.get("#uncontrolled-tab-example-tab-hotels").click();

    if (RandomIndex == 0) {
      cy.get('[data-testid="AutoCompleteInput"]').type("دبي");
    } else if (RandomIndex == 1) {
      cy.get('[data-testid="AutoCompleteInput"]').type("dubai");
    }

    cy.wait(1000);

    cy.get('[data-testid="AutoCompleteResultItem1"]').click();
  });
});
