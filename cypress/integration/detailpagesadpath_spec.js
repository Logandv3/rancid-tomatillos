describe('Detail Page Sad Paths', () => {

  it('Should should show error message when response code is 300 status', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/337401', {
      body: {foo: 'Bar'},
      statusCode: 301
    })
    cy.visit("http://localhost:3000/337401")
    cy.get('.error-msg')
    .contains('You Have Been Redirected')
  });

  it('Should should show error message when response code is 400 status', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/337401', {
      body: {foo: 'Bar'},
      statusCode: 404
    })
    cy.visit("http://localhost:3000/337401")
    cy.get('.error-msg')
    .contains('Please Enter a Proper URL')
  });

  it('Should should show error message when response code is 500 status', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/337401', {
      body: {foo: 'Bar'},
      statusCode: 504
    })
    cy.visit("http://localhost:3000/337401")
    cy.get('.error-msg')
    .contains('Network or Server Could Not Be Reached')
  });
});
