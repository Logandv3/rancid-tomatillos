import React, { Component } from "react";
import Header from "./Header";
import Feature from "./Feature";
import Detail from "./Detail";
import Movies from "./Movies";
import Login from "./Login";
import "../styles/App.css";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      allMovies: [],
      movieClicked: null,
    };
  }

  componentDidMount() {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then(response => {
        return response.json()})
      .then(data => this.setState({ allMovies: data.movies }))
      .catch(error => console.log(error));
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
                  <Feature />
                <Movies allMovies={this.state.allMovies} />
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
