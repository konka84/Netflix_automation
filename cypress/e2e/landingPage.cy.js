describe('landingPage', () => {

  beforeEach(() => {
    // Clear cookies
    cy.clearCookies();
    
    // Clear local storage
    cy.clearLocalStorage();
  });


  it('verify the title', () => {
    cy.visit('https://www.netflix.com')
    cy.title().should('eq','Netflix Bangladesh - Watch TV Shows Online, Watch Movies Online')

  })
 
it('verify that sign in button exists in landing page',()=>{
 cy.visit('https://www.netflix.com')
 cy.get('a').contains('Sign In').should('be.visible')
})

// it('verify the functionality  of sign in button for invalid credentials',()=>{
//   cy.visit('https://www.netflix.com')
//   cy.get('a').contains('Sign In').click()
//   cy.wait(2000)
//   cy.get('input[type="email"]').type("konka@gmail.com")
//   cy.get('input[type="password').type("1234")
//   cy.get('button').contains("Sign In").click()
//   cy.wait(6000)
//   //cy.get('div').contains("Sorry, we can't find an account with this email address. Please try again or ").should('exist')
//  //cy.get('a').contains('create a new account').click()
// })
it('verify the functionality of sign up',()=>{

  cy.visit('https://www.netflix.com')
  cy.get('input[autocomplete="email"]').eq(0).type("cat420@yopmail.com")
  cy.wait(6000)
  cy.get('button').contains("Get Started").click()
  cy.get('input#id_password').eq(0).type('doichira123')
  cy.get('button').contains("Next").click()
  //cy.get('b').contains("Incorrect password.").should('be.visible')
  cy.get('button').contains('Next').click()
  cy.wait(6000)
  cy.get('button').contains('Next').click()
  cy.wait(4000)
  cy.get('div').contains('End-to-end encrypted').should('be.visible')
  cy.get('div.mopNameAndLogos').click()
 
     
})

it('Verify card setup functionality with invalid card details',function(){
  cy.get('label[for="id_creditCardNumber"]').type(4111111111111111)

  cy.wait(2000)
  cy.get('label[placeholder = "creditExpirationMonth"]').find('input').click({force:true}).type(1227)
  cy.wait(2000)
  cy.get('#id_creditCardSecurityCode').type(111)
  cy.wait(2000)
  cy.get('#id_firstName').type('Fatema Konka')
  cy.wait(2000)
  cy.get('input[name="hasAcceptedTermsOfUse"]').click({force:true})
  cy.wait(2000)
  cy.get("button").contains('Start Membership').click({force:true})
  cy.wait(6000)
  cy.get('h1.stepTitle').then(($title)=>{
    let confirmAcc = $title.text()
    cy.log(confirmAcc)
  })
})

it('Verify account confirmation with invalid phone number', function(){
  cy.get('div.ui-select-current').find('span.country-select-code').should('contain.text','880')
  cy.wait(3000)
  cy.get('#id_phoneNumber').click({force:true}).type(12345678)
  cy.wait(3000)
  cy.get('button').contains('Text Me').click({force:true})
  cy.wait(6000)
  cy.get("div[role='alert']").should('be.visible')
  cy.get("div[role='alert']").find('span').then(($span)=>{
    let alert = $span.text()
    cy.log(alert)
  })
})

it('Check signout functionality', function(){

  cy.get('a').contains('Sign Out').click()
  cy.wait(4000)
  cy.get('div.logout').should('be.visible')
  cy.get('a').contains('Go Now').click()
  cy.wait(8000)
  cy.get('button').contains('Get Started').should('be.visible')

})
})