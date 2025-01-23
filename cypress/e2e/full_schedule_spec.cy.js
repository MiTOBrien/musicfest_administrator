
describe('Homepage Spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001')
  } )

  it('Has A NavBar', () => {
    cy.intercept('https://localhost:3001', {
      statusCode: 200
    })

    cy.get('nav').should('exist')
    cy.get('.homebtn').should('exist')
    cy.get('.homebtn').should('have.attr', 'alt', 'Back to home page')
    cy.get('.fullschedule').contains('Full Schedule')
    cy.get('.userschedule').contains('User Schedule')
    cy.get('.deleteshow').contains('Delete Show')
  })

  it('Navigates the pages', () => {
    cy.get('.fullschedule').click({force: true})
    cy.location('pathname').should('match', /\/fullschedule$/)
    cy.get('.userschedule').click({force: true})
    cy.location('pathname').should('match', /\/userschedule$/)
    cy.get('.deleteshow').click({force: true})
    cy.location('pathname').should('match', /\/deleteshow$/)
    cy.get('.homebtn').click()
  })

  it('Contains Homepage Elements', () => {
    cy.get('.fullschedule').click({force: true})
    cy.get('h1').contains('MusicFest Administrator')
    cy.get('h3').contains('More feautures coming soon!')
    cy.get('h2').contains('Festival Schedule')
    cy.get('button').should('exist')
  })
})
