///<reference types='cypress'/>

describe('valid credentials for contact us user',function(){
    it('verify for valid user',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type('aasavari')
        cy.get('input[name="last_name"]').type('bedade')
        cy.get('input[name="email"]').type('aasavaribedade@gmail.com')
        cy.get('textarea[name="message"]').type('hello cypress')
        cy.get('[type="submit"]').click()

        cy.get('h1').should('have.text','Thank You for your Message!')
    })

    it('verify for invalid user',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type('aasavari')
        cy.get('input[name="last_name"]').type('bedade')
        cy.get('input[name="email"]').type('aasavari')
        cy.get('textarea[name="message"]').type('hello cypress')
        cy.get('[type="submit"]').click()

        cy.contains(" Error: Invalid email address").should('be.visible')
    })

    it('incomplete user data',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type('aasavari')
        cy.get('input[name="last_name"]').type('bedade')
        cy.get('input[name="email"]').type('aasavaribedade@gmail.com')
        //cy.get('textarea[name="message"]').type('')
        cy.get('[type="submit"]').click()

        cy.contains( "Error: all fields are required").should('be.visible')
        
    })

    it('after reset all field will clear',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type('aasavari')
        cy.get('input[name="last_name"]').type('bedade')
        cy.get('input[name="email"]').type('aasavaribedade@gmail.com')
        cy.get('textarea[name="message"]').type('hello cypress')
        cy.get('[type="reset"]').click()

        cy.get('input[name="first_name"]').should('have.text','')
        cy.get('input[name="last_name"]').should('have.text','')
        cy.get('input[name="email"]').should('have.text','')
        cy.get('textarea[name="message"]').should('have.text','')

    })
})