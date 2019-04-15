import React, { Component } from "react";
import "./MoviePages.css";

const __pageBlock = 1;
const __nextPage = 1;

let __movie_count = 1;
let __page_number = 1;
let __page_block = 20;

class MoviePages extends Component {
  state = {};

  movieData = this.props.movieDataObject;
  __movie_count = this.props.movieDataObject.movie_count;
  __page_number = this.props.movieDataObject.page_number;
  __page_block = this.props.movieDataObject.page_block;

  __callParentFunctionMovePages = e => {
    console.log("MoviePages.__nextPage=", this.__nextPage);
    this.props.handleToAppPages({
      nextPage: this.__nextPage
    });
  };

  __callParentFunctionFirst = e => {
    e.preventDefault();
    this.__nextPage = 1;
    this.__callParentFunctionMovePages();
  };
  __callParentFunctionPrev = e => {
    e.preventDefault();
    if (this.props.movieDataObject.page_number > 1) {
      this.__nextPage = this.props.movieDataObject.page_number - 1;
      this.__callParentFunctionMovePages();
    }
  };

  __callParentFunctionNext = e => {
    e.preventDefault();
    this.__nextPage = this.props.movieDataObject.page_number + 1;
    this.__callParentFunctionMovePages();
  };

  __callParentFunctionFinal = e => {
    e.preventDefault();
    this.__nextPage = Math.ceil(
      this.props.movieDataObject.movie_count /
        this.props.movieDataObject.page_block
    );
    this.__callParentFunctionMovePages();
  };

  render() {
    console.log(
      "MoviePages.__movie_count=",
      this.props.movieDataObject.movie_count
    );
    console.log(
      "MoviePages.__page_number=",
      this.props.movieDataObject.page_number
    );
    console.log(
      "MoviePages.__page_block=",
      this.props.movieDataObject.page_block
    );

    return (
      <div className="MoviePages">
        <div>
          <a href="#" onClick={this.__callParentFunctionFirst} id="pageFirst">
            First
          </a>
        </div>
        <div>
          <a href="#" onClick={this.__callParentFunctionPrev} id="pagePrev">
            Prev
          </a>
        </div>
        <div> {this.props.movieDataObject.page_number} </div>
        <div>
          <a href="#" onClick={this.__callParentFunctionNext} id="pageNext">
            Next
          </a>
        </div>
        <div>
          <a href="#" onClick={this.__callParentFunctionFinal} id="pageFinal">
            Final
          </a>
        </div>
      </div>
    );
  }
}

export default MoviePages;
