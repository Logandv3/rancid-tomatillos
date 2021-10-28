import React, { Component } from "react";
import Header from "./Header";
import Feature from "./Feature";
import Detail from "./Detail";
import Movies from "./Movies";
import Login from "./Login";
import "../styles/App.css";
import { Link, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      allMovies: [],
      featuredMovie: {}
    };
  }

  componentDidMount() {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then(response => {
        return response.json()})
      .then(data => this.showFeatured(data.movies) && this.setState({ allMovies: data.movies }))
      .catch(error => console.log(error));

  }

  showFeatured = (data) => {
    let featured = data.reduce((arr, movie) => {
      let rtngs = 0;
      data.forEach((mov) => rtngs = rtngs + mov.average_rating)
      rtngs = (rtngs/data.length) * 1.2;

      if (movie.average_rating > rtngs) {
        arr.push(movie)
      }
      return arr;
    }, []);

    this.setState({ featuredMovie: featured[Math.floor(Math.random() * featured.length)] });
    return true;
  }

  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={() => {
            return (
              <main className="main">
                <div className="header-container">
                  <Header />
                </div>
                <div className='content-container'>
                  <Link className='feature-link' to={`/${this.state.featuredMovie.id}`} key={this.state.featuredMovie.id}>
                    <Feature featMov={this.state.featuredMovie} />
                  </Link>
                  <Movies allMovies={this.state.allMovies} />
                </div>
              </main>
            );
          }}
        />
        <Switch>
        <Route 
          exact
          path="/login"
          render={() => <Login />}
        />
        <Route
          exact
          path="/:movieId"
          render={({ match }) => {
            return <Detail clickedId={match.params.movieId} />
          }}
        />
        </Switch>
      </div>
    );
  }
}

export default App;
