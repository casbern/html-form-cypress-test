const pg = require('../../db.js')

describe('If the html inputs work', () => {
  it('Goes to the website and fills and the form', () => {
    cy.visit('http://127.0.0.1:8080/')
    
      cy.get('[name="first_name"]')
      .type('Some name')
      cy.get('[name="last_name"]')
      .type('Some last name')
      cy.get('select').select('Female')
      cy.get('[name="age"]')      
      .type(19)
      cy.contains('Add person').click() 
    })
})