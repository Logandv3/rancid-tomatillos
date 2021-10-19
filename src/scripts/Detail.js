import React, { Component } from "react";
import "../styles/Detail.css";
// import movieData from "./movieDetails";


class Detail extends Component { //Detail takein {match} as props
  // state = {movieClicked:null}
  // fetchMovieDetail = ()=>{
  //   fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.}`).then(response => response.json()).then(data => this.setState({movieClicked:data.movie}))
  // }
  constructor() {
    super();
    this.state = {
      movieClicked: null,
    };
  }
  componentDidMount() {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.clickedId}`)
      .then(response => response.json())
      .then(data => this.setState({ movieClicked: data.movie}))
      .then(()=> console.log(this.state.movieClicked))
      .catch(error => console.log(error));
      // console.log('component did mount fires');
      // console.log('clicked id in detail', this.props.clickedId);
  }
  render() {
    // console.log('state movieClicked',this.state.movieClicked)
  
    return (
      <section className="detail-view">
        <h1>WTF</h1>
        <button type="button" name="backToHome" >
          Go back to homepage
        </button>
        {/* <div className="detail-wrapper">
          <div className="poster-container">
            <img className="poster-img" src={this.state.movieClicked.poster_path} alt={this.state.movieClicked.title} />
            <div className="poster-rating">Average Rating:{this.state.movieClicked.average_rating.toFixed(1)}</div>
          </div> 
          <div className="detail-info">
            <h1 className="info-title">{this.props.title}</h1>
            <p className="release-date">{this.props.release_date}</p>
            <p className="runtime">Runtime:{this.props.runtime} minutes</p>
            <p className="revenue">Box Office: ${this.props.revenue.toLocaleString("en-US")} US dollars</p>
            <p className="description">{this.props.overview}</p>
          </div>
          <div className="button-container">
            <button type="button" name="addToFavorites">
              Add to Favorites
            </button>
            <button type="button" name="addToWatchList">
              Add to Watch List
            </button>
          </div>
         </div> */}
      </section>)
   
  }
}




export default Detail;
