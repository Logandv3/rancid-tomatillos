import React, { Component } from "react";
import Header from "./Header";
import Feature from "./Feature";
import Detail from "./Detail";
import Movies from "./Movies";
// import movieData from "./movieDetails.js";
import "./App.css";
//Bei's comment dkfjskdlfjskdjfskjfsdkfjdsklfj

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
      .then(response => response.json())
      .then(data => this.setState({ allMovies: data.movies }))
      .catch(error => console.log(error));
  }

  backToHome = () => {
    return this.setState({ movieClicked: null });
  };

  showDetails = e => {
    const forcedTarget = e.target.tagName === "ARTICLE" ? e.target : e.target.parentNode;
    const clickedId = parseInt(forcedTarget.id);
    // const movieClicked = this.state.allMovies.find(movie => movie.id === clickedId);
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${clickedId}`)
      .then(response => response.json())
      .then(data => this.setState({ movieClicked: data.movie }))
      .catch(error => console.log(error));
    // return this.setState({ movieClicked: movieClicked });
  };

  render() {
    return (
      <div className="App">
        <Header />
        {!this.state.movieClicked && <Feature />}
        {this.state.movieClicked && <Detail movieClicked={this.state.movieClicked} backToHome={this.backToHome} />}
        {!this.state.movieClicked && <Movies allMovies={this.state.allMovies} showDetails={this.showDetails} />}
      </div>
    );
  }
}

export default App;
