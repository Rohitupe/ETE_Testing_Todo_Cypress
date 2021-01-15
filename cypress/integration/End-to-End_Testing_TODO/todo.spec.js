/// <reference types ="cypress" />

// End TO End testing On TODO APP
/*
 Created 2 commands 
 1. To add New Todo - add_todo()
 2. To Update Existing Todo - update_todo()
 */

describe("End TO End Testing Of ToDo App",()=>{
    let count = 0;
    // visit Webpage
    it("Open ToDO App Webpage",()=>{
        cy.visit('/'); // baseURL is in [../cypress.json]
    });

    // check if there are any todos in table
    it("Check if any Todo Exists",()=>{
        // check if table exists
        cy.get('.table').should("not.exist");
    });

    //  add todos 
    it("Add 4 New Todos",()=>{
        while (count < 4) {
            cy.add_todo('Todo '+count); // add_todo command is created [check -> ../cypress/support/commands.js]
            count++;
        }
    });

    // update 3rd Todo
    it("Update 3rd Todo",()=>{
        // cy.visit('http://flasktodocrudapp.herokuapp.com/update/'+'3');
        cy.visit("/update/"+"3");
        cy.update_todo("updated"); // update todo command is created [check -> support/commands.js]
    });

    // delete all todos
    it("Delete All Todos", ()=>{
        while (count!=0) {
            cy.get(`a[href='/delete/${count}']`).click();
            count--;
        }
    });

});