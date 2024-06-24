///<reference types='cypress'/>

describe('login into OrangeHRM',function(){
    beforeEach(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

    it('verify for valid user',function(){
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()

        cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text',"Dashboard")
        

    })

    it('verify for inavalid user',function(){
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('admin')
        cy.get('button[type="submit"]').click()

        cy.get('.oxd-alert-content-text').should('have.text','Invalid credentials')
   })

    it('verify for incomplete data',function(){
        cy.get('input[name="username"]').type('Admin')
        //cy.get('input[name="password"]').type('admin')
        cy.get('button[type="submit"]').click()

        cy.get('.oxd-input-group__message').should('have.text','Required')

    })


})