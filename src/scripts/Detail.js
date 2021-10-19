import React, { Component } from "react";
import "../styles/Detail.css";
// import movieData from "./movieDetails";

class Detail extends Component {
  render() {
    return (
      <section className="detail-view">
        <button type="button" name="backToHome" onClick={this.props.backToHome}>
          Go back to homepage
        </button>
        <div className="detail-wrapper">
          <div className="poster-container">
            <img className="poster-img" src={this.props.movieClicked.poster_path} alt={this.props.movieClicked.title} />
            <div className="poster-rating">Average Rating:{this.props.movieClicked.average_rating.toFixed(1)}</div>
          </div>
          <div className="detail-info">
            <h1 className="info-title">{this.props.movieClicked.title}</h1>
            <p className="release-date">{this.props.movieClicked.release_date}</p>
            <p className="runtime">Runtime:{this.props.movieClicked.runtime} minutes</p>
            <p className="revenue">Box Office: ${this.props.movieClicked.revenue.toLocaleString("en-US")} US dollars</p>
            <p className="description">{this.props.movieClicked.overview}</p>
          </div>
          <div className="button-container">
            <button type="button" name="addToFavorites">
              Add to Favorites
            </button>
            <button type="button" name="addToWatchList">
              Add to Watch List
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default Detail;
