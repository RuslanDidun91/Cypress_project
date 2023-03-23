/// <reference types="cypress" />


describe('Acomplishment dashboard', () => {
  beforeEach(() => {
    cy.visit('/accomplishments')
  })

  it('should shawcase error', () => {
    cy.get('[data-cy="accomplishment-title-input"]').type('test task')
    cy.get('[data-cy="accomplishment-input"]').type('task test')
    cy.get('.Accomplishment-btn').click()
    cy.contains('Complete the items above to continue').should('be.visible')
  })
  it('should display validation component if all inputs filled up', () => {
    cy.get('[data-cy="accomplishment-title-input"]').type('new test task')
    cy.get('[data-cy="accomplishment-input"]').type('new task test')
    cy.get('[data-cy="accomplishment-checkbox"]').click()
    cy.get('.Accomplishment-btn').click()
    cy.contains('This Accomplisment was Successfully Submitted').should('be.visible')

  })

  it('should return back with empty imputs', () => {
    cy.get('[data-cy="accomplishment-title-input"]').type('new test task')
    cy.get('[data-cy="accomplishment-input"]').type('new task test')
    cy.get('[data-cy="accomplishment-checkbox"]').click()
    cy.get('.Accomplishment-btn').click()
    cy.contains('This Accomplisment was Successfully Submitted').should('be.visible')
    cy.get('.Accomplishment-btn').click()
    cy.get('[data-cy="accomplishment-title-input"]').should('be.empty')
    cy.get('[data-cy="accomplishment-input"]').should('be.empty')
  })
})