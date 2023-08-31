describe('page accueil', () => {
  it('contien titre', () => {
    cy.visit('/')
    cy.contains('h1', 'Choisissez un muscle')
  })
})


describe('page login', () => {
  it('check place holder', () => {
    cy.visit('/login')
    cy.get('input').invoke('attr', 'placeholder').should('contain', "nom de l'utilisateur ou email")
  })
})