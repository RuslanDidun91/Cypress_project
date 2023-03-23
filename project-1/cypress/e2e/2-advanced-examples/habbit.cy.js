/// <reference types="cypress" />

describe("hit dashboard", () => {

  beforeEach(() => {
    cy.visit("/habits")
  })

  it('should display modal when button click', () => {
    cy.get("#habit-add-btn").click()
    cy.contains("Add a new habit").should("be.visible")
  })

  it("should display habit", () => {
    cy.get("#habit-add-btn").click()
    cy.get('.form-control').type('Some random text')
    cy.get('.btn-primary').click()
    cy.contains('Some random text')
      .should("be.visible")
      //the same as .should
      .and("have.class", "HabitCard__habit-container")
  })

  it('should toggle icon be clicked', () => {
    cy.get("#habit-add-btn").click()
    cy.get('.form-control').type('Another random text')
    cy.contains('Save Changes').click()
    cy.get("[src='/static/media/close.fa7e5ead.svg']").should("be.visible")
    cy.contains('Another random text').click()
    cy.get("[src='/static/media/check.9e8832df.svg']").should("be.visible")
  })

}) 
