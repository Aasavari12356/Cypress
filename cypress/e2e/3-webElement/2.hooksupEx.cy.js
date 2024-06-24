///<reference types='cypress'/>

describe('verify contact us page',function(){
    beforeEach(function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

    })

    it('verify for valid user data',function(){
        cy.get('input[name="first_name"]').type('aasavari')
        cy.get('input[name="last_name"]').type('bedade')
        cy.get('input[name="email"]').type('aasavaribedade@gmail.com')
        cy.get('textarea[name="message"]').type('hi sawari')
        cy.get('input[type="submit"]').click()


        cy.get('h1').should('have.text','Thank You for your Message!')
    })


    it('verify for inavaild user',function(){
        cy.get('input[name="first_name"]').type('aasavari')
        cy.get('input[name="last_name"]').type('bedade')
        cy.get('input[name="email"]').type('aasavarigmail.com')
        cy.get('textarea[name="message"]').type('hi sawari')
        cy.get('input[type="submit"]').click()

        cy.contains('Error: Invalid email address').should('be.visible')

    })

    it('verify for incomplete user info',function(){
        cy.get('input[name="first_name"]').type('aasavari')
        cy.get('input[name="last_name"]').type('bedade')
        cy.get('input[name="email"]').type('aasavarigmail.com')
        //cy.get('textarea[name="message"]').type('hi sawari')
        cy.get('input[type="submit"]').click()

        cy.contains('Error: all fields are required').should('be.visible')
    })

    it('verify for reset button',function(){
        cy.get('input[name="first_name"]').type('aasavari')
        cy.get('input[name="last_name"]').type('bedade')
        cy.get('input[name="email"]').type('aasavarigmail.com')
        cy.get('textarea[name="message"]').type('hi sawari')
        cy.get('input[type="reset"]').click()

        cy.get('input[name="first_name"]').should('have.text','')
        cy.get('input[name="last_name"]').should('have.text','')
        cy.get('input[name="email"]').should('have.text','')
        cy.get('textarea[name="message"]').should('have.text','')
        



    })
})