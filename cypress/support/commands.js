// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



// -- This is a parent command --
Cypress.Commands.add('contactUs', (fn, ln, em, ms, css) => {
    cy.get('input[name="first_name"]').type(fn)
    cy.get('input[name="last_name"]').type(ln)
    cy.get('input[name="email"]').type(em)
    cy.get('textarea[name="message"]').type(ms)
    cy.get(css).click()

})

Cypress.Commands.add('OHRM', (un, pw) => {
    cy.get('input[name="username"]').type(un)
    cy.get('input[name="password"]').type(pw)
    cy.get('button[type="submit"]').click()


})


