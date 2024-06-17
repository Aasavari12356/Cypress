///<reference types='cypress'/>

describe('verify contact us page',function(){
    it('vreify for valid user',function(){
        //aaa
        //arrangement
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type('asavari')
        cy.get('input[name="last_name"]').type('bedade')
        cy.get('input[name="email"]').type('aasavaribedade@gmail.com')
        cy.get('textarea[name="message"]').type('i am learning bdd cypress')
        cy.get('[type="submit"]').click()

        //assertion
        cy.get('h1').should('have.text','Thank You for your Message!')
        
        
    })

    it('verify for invalid user',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type('asavari')
        cy.get('input[name="email"]').type('asavaribedade')
        cy.get('textarea[name="message"]').type('hi')
        cy.get('[type="submit"]').click()
        cy.contains('Error: Invalid email address').should('be.visible')

    })
})