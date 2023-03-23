/// <reference types="cypress" />

describe('Locators', () => {

  beforeEach(() => {
    cy.visit('/elements')
  })
  it('locating elements with get', () => {
    //get all elements by tag name 
    cy.get('button')

    //get all elements by classname
    cy.get('.btn-with-class')

    //get all elements with specific classes
    cy.get("[class='Elements-btn btn-with-class more-btn-classes']")

    //get element by id
    cy.get('#btn-with-id')

    //get all elements by tagName and class
    cy.get("button.Elements-btn[type='submit']")

    cy.getByTestId("btn-id-1")
  })
  it("locating elements with contains", () => {
    //get element by text
    cy.contains("Unique Text")
    cy.contains("Not Unique Text")
    cy.contains("[type='submit']", "Not Unique Text")
  })
  it("locating element find", () => {
    cy.get("#form-1").find(".btn-1")
    cy.get("#form-1").find(".btn-2")
  })
})