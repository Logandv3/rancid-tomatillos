import React, { Component } from "react";
import Header from "./Header";
import Feature from "./Feature";
import Detail from "./Detail";
import Movies from "./Movies";
// import movieData from "./movieDetails.js";
import "../styles/App.css";
import { NavLink, Route } from 'react-router-dom';


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

  // backToHome = () => {
  //   return this.setState({ movieClicked: null });
  // };

  // showDetails = e => {
  //   const forcedTarget = e.target.tagName === "ARTICLE" ? e.target : e.target.parentNode;
  //   const clickedId = parseInt(forcedTarget.id);
  //   // const movieClicked = this.state.allMovies.find(movie => movie.id === clickedId);
  //   // return this.setState({ movieClicked: movieClicked });
  // };

  render() {
    return (
      <div className="App">
        <Header />
        <Feature />
        <Movies allMovies={this.state.allMovies}/>
       

        <Route exact path="/:movieId" render={({match})=>{
          // fetch the movie detail with match.param   . movieId
          const clickedId= parseInt(match.params.movieId)
          // let clickedMovie
          fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${clickedId}`).then(response => response.json()).then(data =>
             <Detail {...data}/>)
          console.log("match", match)

        
          // console.log("clickedMovie",);
        }
}
        />
      </div>
    );
  }
}

export default App;
