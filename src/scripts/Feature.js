import React from "react"
import "../styles/Feature.css"

const Feature = ({ featMov }) => {
  return (
    <section className="feature">
      <img className='featured-poster' src={featMov.backdrop_path} alt={featMov.title} />
      <div className='title-cont'>
        <p className='mov-title'>{featMov.title}</p>
      </div>
    </section>
  )
}

export default Feature
