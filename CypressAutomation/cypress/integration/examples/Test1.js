/// <reference types="Cypress" />
describe("My First Test Suite", function()
{
    it("My 1st Test case", function()
    {
        cy.visit("http://qaclickacademy.com/practice.php");
        //cy.get("#displayed-text").type("This is first type");
        cy.wait(1000);
        cy.get("#hide-textbox").click();
        cy.wait(1000);
        cy.get("#show-textbox").click();
        cy.wait(1000);

    })
    it("My 2nd Test case", function()
    {
        cy.get('#displayed-text').type('This is first type');
        cy.wait(1000);
        cy.get('#hide-textbox').click();
        cy.wait(1000);
        cy.get('#show-textbox').click();
        cy.wait(1000);
        //cy.get('h1').should("be.a","Practice Page");
    })

})