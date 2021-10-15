import React, { Component } from "react";
import Card from "./Card";
import "./Movies.css";

class Movies extends Component {
  render() {
    return (
      <section className="movies-container">
        <h3 className="view-title">All Movies</h3>
        <Card className="movie-card" />
      </section>
    );
  }
}

export default Movies;
