import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  render() {
    return (
      <div className='card'>
       <img className="card-backdrop" src={this.props.backdrop} alt="movie backdrop"/>
       <div className="card-info">
        <p className="card-title">{this.props.title}</p>
        <p className="card-rating">{this.props.rating}</p>
      </div>
       
   
       </div>
  )
  }
}

export default Card;
