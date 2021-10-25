import React, { Component } from "react"
import "../styles/Card.css"

class Card extends Component {
  render() {
    return (
      <article className="card-container" id={this.props.id}>
        <img
          className="card-backdrop"
          src={this.props.backdrop}
          alt="movie backdrop"
        />
        <div className="card-info">
          <p className="card-title">{this.props.title}</p>
          <p className="card-rating">{this.props.rating}</p>
        </div>
      </article>
    )
  }
}

export default Card
