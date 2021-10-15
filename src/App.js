import React, { Component } from "react";
import Header from "./Header";
import Feature from "./Feature";
import Detail from "./Detail";
import Movies from "./Movies";
import movieData from './movieDetails.js';
import "./App.css";
//Bei's comment dkfjskdlfjskdjfskjfsdkfjdsklfj

class App extends Component {
  constructor() {
    super()
    this.state = {
      allMovies: movieData.movies 
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Feature />
        <Detail />
        <Movies allMovies={this.state.allMovies}/>
      </div>
    );
  }
}

export default App;
