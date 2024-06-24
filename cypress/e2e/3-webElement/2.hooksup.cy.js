// hooksup it is a special type function. jo particular type par execute karne ke liye hote hai
//hooks in cypress
//before , beforeEach, afterEach , after
//console.log se terminal par print hota hai like that cy.log se test runner par print hota hai
//before = ye fun. 1 bar execute hota hai sare test case excute hone ke pehele
//beforeeach = ye har tc ke peheale excute hota hai
//aftereach = sare(1-1) tc excute hone ke bad  excute hota hai
//after = sabse bad last mai excute hota hai


///<reference types ='cypress'/>


before(function(){
    cy.log('i will execute first')
})

beforeEach(function(){
    cy.log('i will excute every beforeeach test case')
})

it('test case one',function(){
    cy.log('i am test case one TC1')
})
it('test case two',function(){
    cy.log('i am test case two TC2')
})

afterEach(function(){
    cy.log('i will excute after each testcase ')
})

after(function(){
    cy.log('i will excute last')
})




