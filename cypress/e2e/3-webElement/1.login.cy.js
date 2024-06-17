///<reference types='cypress'/>

describe('verify contact us page',function(){
    it('verify contact us page for verify data',function(){
        //testcase
        //AAA
        //Arrangements
        //action
        //assertion
        


        //Arrangements
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

        //action
        cy.get('input[name="first_name"]').type('Aasavari')
        cy.get('input[name="last_name"]').type('bedade')
        cy.get('input[name="email"]').type('aasavaribedade@gmail.com')
        cy.get('textarea[name="message"]').type('i am learning cypress')
        cy.get('[type="submit"]').click()


        //assertion
        
        cy.get('h1').should('have.text','Thank You for your Message!')



    })

    it('verify contact ud page for invalid data',function(){

    })
})