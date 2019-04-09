import React, { Component } from "react";
import "./MoviePages.css";

class MoviePages extends Component {
  state = {};

  __movie_count = this.props.movie_count;
  __page_number = this.props.page_number;

  render() {
    console.log("MoviePages", this.props);
    return (
      <div className="MoviePages">
        <div> First </div>
        <div> Prev </div>
        <div> 1 </div>
        <div> Next </div>
        <div> Final </div>
      </div>
    );
  }
}

export default MoviePages;
