/// <reference types="Cypress" />

describe("My Google Project", function()
{
    it("Opening Google link",function()
    {
        cy.visit("https://www.google.com/");

    })
    it("Typing text in searchbox",function()
    {
      cy.get('.gLFyf').type("Apple.com");
    })
    it("Clicking Google Search button",function()
    {
        cy.get('input[value="Google Search"]').eq(1).click({force: true});
    })
    it("Grabing Result Text", function()
    {
        cy.get('.st').invoke('text');
    })
    it("Clicking on Apple", function()
        {
            cy.get('[href="https://www.apple.com/"] > .LC20lb > .S3Uucc').click();
        })
})