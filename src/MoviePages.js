import React, { Component } from "react";
import "./MoviePages.css";

const pageBlock = 1;

class MoviePages extends Component {
  state = {};

  __movie_count = this.props.movie_count;
  __page_number = this.props.page_number;

  render() {
    console.log("MoviePages.__movie_count=", this.__movie_count);
    console.log("MoviePages.__page_number=", this.__page_number);
    return (
      <div className="MoviePages">
        <div> First </div>
        <div> Prev </div>
        <div> 1, 2, 3, 4, 5 </div>
        <div> Next </div>
        <div> Final </div>
      </div>
    );
  }
}

export default MoviePages;
