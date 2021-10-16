import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  // When we click on a specific card, we should be taken to
  // a view with more details on that movie.

  //When click happens, movie cards and feature post will be hidden, movie detail will show

  // Need to find a place that can control the display of all three components

  render() {
    return (
      <article id={this.props.id}>
        <img
          className="card-backdrop"
          src={this.props.backdrop}
          alt="movie backdrop"
          onClick={event => this.props.handleClick(event)}
        />
        <div className="card-info">
          <p className="card-title">{this.props.title}</p>
          <p className="card-rating">{this.props.rating}</p>
        </div>
      </article>
    );
  }
}

export default Card;
