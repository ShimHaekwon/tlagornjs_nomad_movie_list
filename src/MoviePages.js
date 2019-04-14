import React, { Component } from "react";
import "./MoviePages.css";

const __pageBlock = 1;
const __nextPage = 1;

class MoviePages extends Component {
  state = {};

  __movie_count = this.props.movie_count;
  __page_number = this.props.page_number;

  __callParentFunction = e => {
    console.log("this.__movie_count:" + this.__movie_count);
    console.log("this.__page_number:" + this.__page_number);
    this.props.handleToAppPage({
      nextPage: this.__nextPage
    });
  };


  __callParentFunctionFirst = e => {
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
    console.log("MoviePages.__movie_count=", this.__movie_count);
    console.log("MoviePages.__page_number=", this.__page_number);
    return (
      <div className="MoviePages">
        <div> <a onClick="{this.__callParentFunctionFirst}">First</a> </div>
        <div> <a onClick="{this.__callParentFunctionPrev}">Prev</a> </div>
        <div> 1, 2, 3, 4, 5 </div>
        <div> <a onClick="{this.__callParentFunctionNext}">Next</a> </div>
        <div> <a onClick="{this.__callParentFunctionFinal}">Final</a> </div>
      </div>
    );
  }
}

export default MoviePages;
