/// <reference types="cypress" />

describe("Acomplishments dashboard", () => {
  beforeEach(() => {
    cy.visit('/accomplishments')
  })
  it("should display innapropriate content error", () => {
    cy.get("[placeholder='Title']").type("test Accomplishment")
    cy.get("[placeholder='My accomplishment...']").type('pet a giraffe')
    cy.get("[type='checkbox']").click()
    cy.get(".Accomplishment-btn").click()
    cy.contains('Your content is not appropriate').should('be.visible')
  })

  it("should display innapropriate content error with mock", () => {

    cy.intercept("POST", "http://localhost:4000", (req) => {
      req.reply((res) => {
        res.send({
          msg: 'Your content is not appropriate'
        })
      })
    })

    cy.get("[placeholder='Title']").type("test Accomplishment")
    cy.get("[placeholder='My accomplishment...']").type('pet a giraffe')
    cy.get("[type='checkbox']").click()
    cy.get(".Accomplishment-btn").click()
    cy.contains('Your content is not appropriate').should('be.visible')
  })

})