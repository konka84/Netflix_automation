describe('netflixAppear', () => {
  it('verify-title-positive', () => {
    cy.visit('https://www.netflix.com')
    cy.title().should('eq','Unlimited movies, TV shows and more')
    

  })
})