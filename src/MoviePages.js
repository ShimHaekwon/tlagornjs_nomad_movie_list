import React, { Component } from "react";
import "./MoviePages.css";

// const __pageBlock = 1;
// const __nextPage = 1;

// let __movie_count = 1;
// let __page_number = 1;
//let __page_block = 20;

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
    this.__callParentFunction;
  }
  __callParentFunctionPrev = e => {
    this.__nextPage = this.__currentPage - 1;
    this.__callParentFunction;
  }

  __callParentFunctionNext = e => {
    this.__nextPage = this.__currentPage + 1;
    this.__callParentFunction;
  }

  __callParentFunctionFinal = e => {
    this.__nextPage = Math.ceil(this.__movie_count / 20);
    this.__callParentFunction;
  }
  
  
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
          <button onClick={this.__callParentFunctionFirst} id="pageFirst">
            First
          </button>
        </div>
        <div>
          <button onClick={this.__callParentFunctionPrev} id="pagePrev">
            Prev
          </button>
        </div>
        <div> {this.props.movieDataObject.page_number} </div>
        <div>
          <button onClick={this.__callParentFunctionNext} id="pageNext">
            Next
          </button>
        </div>
        <div>
          <button onClick={this.__callParentFunctionFinal} id="pageFinal">
            Final
          </button>
        </div>
      </div>
    );
  }
}

export default MoviePages;
