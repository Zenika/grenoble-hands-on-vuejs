/// <reference types="cypress" />

context('City creation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080')
  })

  it('should properly add a city', () => {
    // Given a big enough viewport

    cy.viewport(1200, 1200)
    // When swithcing to new city page
    cy.get('.navbar-end > .navbar-item')
      .click()

    // and adding new city
    cy.get(':nth-child(1) > .control > .input').type('Niamey')
    cy.get(':nth-child(2) > .control > .input').type('13.5045')
    cy.get(':nth-child(3) > .control > .input').type('2.1065')
    cy.get('.button').click()

    // Then im redirected to main page, and city is added
    cy.get('[href="/Niamey"]').should('be.visible', 'Niamey')
  });

  it('should properly add a city', () => {
    // Given a big enough viewport

    cy.viewport(1200, 1200)
    // When swithcing to new city page
    cy.get('.navbar-end > .navbar-item')
      .click()

    // and adding new city
    cy.get(':nth-child(1) > .control > .input').type('Niamey')
    cy.get(':nth-child(2) > .control > .input').type('13.5045')
    cy.get(':nth-child(3) > .control > .input').type('2.1065')
    cy.get('.button').click()

    // Then im redirected to main page, and city is added
    cy.get('[href="/Niamey"]').should('be.visible', 'Niamey')
  });


})
