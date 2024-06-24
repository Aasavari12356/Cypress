///<reference types='cypress'/>

describe('verify for orangeHRM',function(){
    beforeEach(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })


    it('verify for valid user',function(){
        cy.OHRM('Admin','admin123')

        cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text',"Dashboard")

    })


    it('verify for inavalid user',function(){
       cy.OHRM('ad','admin123')

        cy.get('.oxd-alert-content-text').should('have.text','Invalid credentials')
   })
})