describe('template spec', () => {
  it('passes', () => {
    cy.visit('www.saucedemo.com')
    cy.get('[data-test="username"]')
  })
})