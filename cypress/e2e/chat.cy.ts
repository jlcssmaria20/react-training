export {}

describe('My First Test', () => {
  it('enter something to chatbox', () => {
    cy.visit('/')

    cy.contains('Chat').click()
    cy.url().should('include', '/chat')

    cy.get('#chatbox').type('Chat 4').should('have.value', 'Chat 4')

    cy.contains('Enter').click()
    cy.contains('Chat 4')
  })
})
