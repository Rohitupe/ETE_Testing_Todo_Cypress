# TODO APP ETE Testing With Cypress


 <h3>Created 2 commands</h3>
 <ul>
  <li>
  1. To add New Todo - add_todo()
  </li>
  <li>
    2. To Update Existing Todo - update_todo()
  </li>
 </ul>
 
 
 <h5> Check File - cypress/support/commands.js</h5>
 
 <code>
 Cypress.Commands.add("add_todo", (text)=>{
    cy.get('input[type=text]').type(text)
    cy.get('input[type=submit]').click()
});

Cypress.Commands.add("update_todo",(text)=>{
    cy.get('#content').clear()
    cy.get('#content').type(text);
    cy.get("input[type=submit]").click()
})
</code>
