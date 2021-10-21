describe('Detail Page', () => {
  
  beforeEach (() => {
    cy.visit("http://localhost:3000/337401");
  });

  it('The user should see a movie poster', () => {
    cy.get('img').invoke('attr', 'src')
    .should('eq', 'https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg')
  });

  it('The user should see a movie rating', () => {
    cy.get('.poster-rating')
    .contains('Average Rating:5.3')
  });

})