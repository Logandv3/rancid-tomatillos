import React, { Component } from "react";
import "../styles/Detail.css";

class Detail extends Component {
  constructor() {
    super();
    this.state = {
      clickedMovie: null,
    };
  }
  componentDidMount() {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.clickedId}`)
      .then(response => response.json())
      .then(data => this.setState({ clickedMovie: data.movie }))
      .catch(error => console.log(error));
  }

  render() {
    return (
      this.state.clickedMovie && (
        <section className="detail-view">
          <h1>{this.props.clickedId}</h1>
          <button type="button" name="backToHome">
            Go back to homepage
          </button>
          <div className="detail-wrapper">
            <div className="poster-container">
              <img
                className="poster-img"
                src={this.state.clickedMovie.poster_path}
                alt={this.state.clickedMovie.title}
              />
              <div className="poster-rating">Average Rating:{this.state.clickedMovie.average_rating.toFixed(1)}</div>
            </div>
            <div className="detail-info">
              <h1 className="info-title">{this.state.clickedMovie.title}</h1>
              <p className="release-date">{this.state.clickedMovie.release_date}</p>
              <p className="runtime">Runtime:{this.state.clickedMovie.runtime} minutes</p>
              <p className="revenue">
                Box Office: ${this.state.clickedMovie.revenue.toLocaleString("en-US")} US dollars
              </p>
              <p className="description">{this.state.clickedMovie.overview}</p>
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
      )
    );
  }
}

export default Detail;
