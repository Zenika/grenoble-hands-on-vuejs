context('City creation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8081')
  })
  it('should properly add a city', () => {
    cy.viewport(1200, 1200)
    cy.get('.navbar-end > .navbar-item').click()
    cy.get(':nth-child(1) > .control > .input').type('Niamey')
    cy.get(':nth-child(2) > .control > .input').type('13.5045')
    cy.get(':nth-child(3) > .control > .input').type('2.1065')
    cy.get('.button').click()
    cy.get('[href="/Niamey"]').should('be.visible')
  });
})
