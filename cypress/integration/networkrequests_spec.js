describe('Detail Page Sad Paths', () => {

  // beforeEach (() => {
  //   cy.visit("http://localhost:3000/337401");
  // });

  it('Should should show error message when response code is 500 status', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/337401', {
      body: {foo: 'Bar'},
      statusCode: 501
    })
    cy.visit("http://localhost:3000/337401")
    cy.get('.error-msg')
    .contains('Network or Server Could Not Be Reached')
    // cy.on('window:alert', (str) => {
    //   expect(str).to.equal('Network or Server Could Not Be Reached')
    // })
  });

  // it('When the movie detail page is loaded, we should fetch that movies details from the API', () => {
  //   // cy.visit("http://localhost:3000/337401")
  //   cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/337401', {
  //     "movie": {
  //       "id":337401,
  //       "title":"Mulan",
  //       "poster_path":"https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
  //       "backdrop_path":"https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
  //       "release_date":"2020-09-04",
  //       "overview":"When the Emperor of China issues a decree that one man per family must serve in the Imperial Chinese Army to defend the country from Huns, Hua Mulan, the eldest daughter of an honored warrior, steps in to take the place of her ailing father. She is spirited, determined and quick on her feet. Disguised as a man by the name of Hua Jun, she is tested every step of the way and must harness her innermost strength and embrace her true potential.",
  //       "genres":["Action","Adventure","Drama","Fantasy"],
  //       "budget":200000000,
  //       "revenue":57000000,
  //       "runtime":115,
  //       "tagline":"",
  //       "average_rating":5.2727272727272725
  //     }
  //   });
  // });


});
