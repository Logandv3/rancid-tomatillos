import React, { Component } from "react";
import Card from "./Card";
import "../styles/Movies.css";
import { Link } from "react-router-dom";

class Movies extends Component {

  render() {
    const movieCards = this.props.allMovies.map(movie => {
      return (
        <Link to={`/${movie.id}`} key={movie.id}>
          <Card
            // id={movie.id}
            backdrop={movie.backdrop_path}
            title={movie.title}
            rating={movie.average_rating.toFixed(1)}
            // showDetails={this.props.showDetails}
          />
        </Link>
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
