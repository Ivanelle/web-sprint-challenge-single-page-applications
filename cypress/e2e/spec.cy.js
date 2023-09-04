describe('Pizza Order App', () => {
  it('renders website', () => {
    cy.visit('http://localhost:3000/pizza')
  })
  it('add text to box', () => {
    cy.visit('http://localhost:3000/pizza')
    cy.get('#name-input')
    .type('Koba')
    .should('have.value', 'Koba')
  })

  it('able to check multiple toppings', () => {
    cy.visit('http://localhost:3000/pizza')
    cy.get('input[name=pineapple]').check()
    cy.get('input[name=pepperoni]').check()
    cy.get('input[name=pulledPork]').check()
  })

  it('submits form', () => {
    cy.visit('http://localhost:3000/pizza')
    cy.get('#pizza-form').submit()
  })








})