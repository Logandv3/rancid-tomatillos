// import cy from 'cypress';

describe('Homepage', () => {

  beforeEach (() => {
    cy.fixture('allMovies.json').then((allMovies) => {
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {body: allMovies});
    });

    cy.visit("http://localhost:3000")
  }); 

  it('User should see a header when the page is loaded', () => {
    cy.get('header >h2')
    .contains(' Rancid Tomatillos ')
  });

  it('User should see a login link in the header section when the page loads', () => {
    cy.get('header >a')
    .contains('Login')
  });

  it('User should see all movies displayed on page when it is loaded', () => {
    cy.get('.card-holder')
    .children().should('have.length', 4)
  });

  it('As a user, I can click a movie, and see that movie’s details', () => {
    cy.get('article')
    .contains("Mulan").click().url().should('include', '337401')
  })

});