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
      allMovies: movieData.movies,
      movieIdClicked:null
    }
  }
  handleClick = (e)=>{
    console.log(e.target)
    

      return this.setState({movieIdClicked: true})
  }
  render() {
    return (
      <div className="App">
        <Header />
        {!this.state.movieIdClicked && <Feature />}
        {this.state.movieIdClicked && <Detail />}
        {!this.state.movieIdClicked && <Movies allMovies={this.state.allMovies} handleClick={this.handleClick}/>}
      </div>
    );
  }
}

export default App;
