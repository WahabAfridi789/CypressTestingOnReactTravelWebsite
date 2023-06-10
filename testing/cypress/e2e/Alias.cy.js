/// <reference types="cypress" />

context("Aliasing", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  //Test case 5

  it("Find trave button, alias it mytravel and click", () => {
    //find travel button
    cy.get("#travelButton").as("mytravel");
    cy.get("@mytravel").click();
  });
});
