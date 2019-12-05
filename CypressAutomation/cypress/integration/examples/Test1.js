/// <reference types="Cypress" />
describe("My First Test Suite", function()
{
    it("My 1st Test case", ()=>
    {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get(".search-keyword").type("ca");
        cy.wait(2000);
        

    })
    it("Adding one Cauliflower", function()
    {
        cy.get('.products').find(".product").each(($el,index,$list)=>{
            const textVeg=$el.find(".product-name").text();
            if(textVeg.includes("Cauliflower"))
            {
                $el.find("button").click();
            }
        });
     })

     it("Adding Two Carrot", function()
    {
        cy.get('.products').find(".product").each(($el,index,$list)=>{
            const textVeg=$el.find(".product-name").text();
            if(textVeg.includes("Carrot"))
            {
                $el.find(".increment").click();
                cy.wait(1000);
                $el.find("button").click();
            }
        });
     })

     it("Grabbing Logo text", function()
     {
        cy.get('.brand').then(function(logo)
        {
            cy.log(logo.text());
        })
        //cy.log(logo.text());
     });
     console.log("Testing begin");

     
      it("Clicking on Cart logo",function()
     {
         cy.get(".cart-icon").click();
         cy.wait(2000);
         cy.contains("PROCEED TO CHECKOUT").click();
        cy.wait(5000);
     }) 
     /* it("Clicking on Proceed to Checkout",function()
     {
        //cy.get(".action-block").find("button").eq(0).click();
        cy.contains("PROCEED TO CHECKOUT").click();
        cy.wait(2000);
     }) */

})