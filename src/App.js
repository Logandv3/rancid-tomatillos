import React, { Component } from "react";
import Header from "./Header";
import Feature from "./Feature";
import Detail from "./Detail";
import Movies from "./Movies";
import movieData from "./movieDetails.js";
import "./App.css";
//Bei's comment dkfjskdlfjskdjfskjfsdkfjdsklfj

class App extends Component {
  constructor() {
    super();
    this.state = {
      allMovies: movieData.movies,
      movieClicked: null,
    };
  }
  handleClick = e => {
    const forcedTarget = e.target.tagName === "ARTICLE" ? e.target : e.target.parentNode;
    const clickedId = parseInt(forcedTarget.id);
    const movieClicked = movieData.movies.find(movie => movie.id === clickedId);
    return this.setState({ movieClicked: movieClicked });
  };

  render() {
    return (
      <div className="App">
        <Header />
        {!this.state.movieClicked && <Feature />}
        {this.state.movieClicked && <Detail movieClicked={this.state.movieClicked} />}
        {!this.state.movieClicked && <Movies allMovies={this.state.allMovies} handleClick={this.handleClick} />}
      </div>
    );
  }
}

export default App;
