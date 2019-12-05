/// <reference types="Cypress" />
describe("My First Test Suite", function()
{
    it("My 1st Test case", function()
    {
       cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
       cy.get("#checkBoxOption1").check().should('be.checked').and('have.value','option1');
       cy.wait(2000);
       cy.get("#checkBoxOption1").uncheck().should('not.be.checked');
       cy.get('input[type="checkbox"]').check(['option2','option3']);
     }) 

     it("Static dropdown Selection", function()
     {
       cy.get('select#dropdown-class-example').select('Select').should('have.value','');
       cy.wait(1000);
       cy.get('select#dropdown-class-example').select('option1').should('have.value','option1');
       cy.wait(1000);
       cy.get('select#dropdown-class-example').select('option2').should('have.value','option2');
       cy.wait(1000);
       cy.get('select#dropdown-class-example').select('option3').should('have.value','option3');
      })

      it('Dynamic dropdown Selection',function()
      {
        cy.get('#autocomplete').type('Ind');
        cy.get('.ui-menu-item-wrapper').each(($el,index,$list)=>{
          if($el.text()=='India')
          {
             $el.click();
          }
        })
        cy.get('input#autocomplete').should('have.value','India');
      })

      it('Checking of invisible textbox',function()
      {
        cy.get('#displayed-text').should('be.visible');
        cy.wait(1000);
        cy.get('#hide-textbox').click();
        cy.wait(1000);
        cy.get('#displayed-text').should('not.be.visible');
      })

      it('Checking Radio button', function()
      {
        cy.get('input[value=radio1]').click().should('be.checked');
        cy.wait(1000);
        cy.get('input[value=radio2]').click().should('be.checked');
        cy.wait(1000);
        cy.get('input[value=radio3]').click().should('be.checked');
      })

      it('Alert Handling', function()
      {
        cy.get('#alertbtn').click();
        //window:alert
        cy.on('window:alert',(str)=>
        {
          //Mocha
          expect(str).to.equal("Hello , share this practice page and share your knowledge");
        })
       })

      it('COnfirmation Alert Handling', function()
      {    
        cy.get('#confirmbtn').click();
        //window:alert
        cy.on('window:confirm',(str)=>
        {
          //Mocha
          expect(str).to.equal("Hello , Are you sure you want to confirm?");
        })
      })
 })