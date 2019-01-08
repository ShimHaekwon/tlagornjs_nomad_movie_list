import React, { Component } from "react";
import "./MovieHeader.css";

const sortByArr = [
  { val: "title", text: "Title" },
  { val: "year", text: "Year" },
  { val: "rating", text: "Rating" }
];

class MovieHeader extends Component {
  state = {};

  __sortby = this.props.sortby;

  __handleChange = e => {
    this.__sortby = e.target.value;
  };

  __callParentFunction = e => {
    console.log("this.__sortby:" + this.__sortby);
    this.props.handleToApp(this.__sortby);
  };

  render() {
    console.log("MovieHeader", this.props);
    return (
      <div className="MovieHeader">
        <h3>Movie List</h3>
        <span>
          <select
            className="MovieSortSelect"
            onChange={this.__handleChange}
            id="sortby"
            name="sortby"
            defaultValue={this.__sortby}
          >
            {sortByArr.map(eachArr => (
              <option value={eachArr.val} key={eachArr.val}>
                {eachArr.text}
              </option>
            ))}
          </select>
          <button name="btnGo" onClick={this.__callParentFunction}>
            GET LIST
          </button>
        </span>
      </div>
    );
  }
}

export default MovieHeader;
