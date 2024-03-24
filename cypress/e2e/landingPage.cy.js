describe('landingPage', () => {

  // it('verify-title-positive', () => {
  //   cy.visit('https://www.netflix.com')
  //   cy.title().should('eq','Netflix Bangladesh - Watch TV Shows Online, Watch Movies Online')

  // })
 /* it('verify-title-negative', () => {
    cy.visit('https://www.netflix.com')
    cy.title().should('eq','Unlimited movies, TV shows and more')
    

  })*/
it('verify that sign in button exists in landing page',()=>{
 cy.visit('https://www.netflix.com')
 cy.get('a').contains('Sign In').should('be.visible')
})
it('verify the functionality  of sign in button for invalid credentials',()=>{
  cy.visit('https://www.netflix.com')
  cy.get('a').contains('Sign In').click()
  cy.wait(2000)
  cy.get('input[type="email"]').type("konka@gmail.com")
  cy.get('input[type="password').type("1234")
  cy.get('button').contains("Sign In").click()
  cy.wait(6000)
  cy.get('div').contains("Sorry, we can't find an account with this email address. Please try again or ").should('exist')
 


 })





})