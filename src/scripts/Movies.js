import React from "react"
import Card from "./Card"
import "../styles/Movies.css"
import { Link } from "react-router-dom"

const Movies = props => {
  const movieCards = props.allMovies.map(movie => {
    return (
      <Link to={`/${movie.id}`} key={movie.id}>
        <Card backdrop={movie.backdrop_path} title={movie.title} rating={movie.average_rating.toFixed(1)} />
      </Link>
    )
  })

  return (
    <section className="movies-container">
      <h3 className="view-title">All Movies</h3>
      <div className="card-holder"> {movieCards}</div>
    </section>
  )
}

export default Movies
