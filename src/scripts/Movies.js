import React, { Component } from "react";
import Card from "./Card";
import "./Movies.css";

class Movies extends Component {
  render() {
    const movieCards = this.props.allMovies.map(movie => {
      return (
        <Card
          key={movie.id}
          id={movie.id}
          backdrop={movie.backdrop_path}
          title={movie.title}
          rating={movie.average_rating.toFixed(1)}
          showDetails={this.props.showDetails}
        />
      );
    });
    return (
      <section className="movies-container">
        <h3 className="view-title">All Movies</h3>
        <div className="card-holder"> {movieCards}</div>
      </section>
    );
  }
}

export default Movies;
