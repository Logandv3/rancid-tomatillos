import React from "react"
import "../styles/Card.css"

const Card = props => {
  return (
    <article className="card-container" id={props.id}>
      <img className="card-backdrop" src={props.backdrop} alt="movie backdrop" />
      <div className="card-info">
        <p className="card-title">{props.title}</p>
        <p className="card-rating">{props.rating}</p>
      </div>
    </article>
  )
}

export default Card
