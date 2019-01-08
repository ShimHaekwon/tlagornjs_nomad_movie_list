import React, { Component } from "react";
import MovieHeader from "./MovieHeader";
import Movie from "./Movie";
import "./App.css";

class App extends Component {
  state = {};

  _sortby = "rating";

  componentDidMount() {
    console.log("componentDidMount");
    this._getMovieList();
  }

  _callMovieListFromChild = parVal => {
    this._sortby = parVal;
    this._getMovieList();
  };

  _getMovieList = async () => {
    const moviesFromApi = await this._callApi();
    this.setState({
      movies: moviesFromApi
    });
  };

  _callApi = () => {
    return fetch(
      "https://yts.am/api/v2/list_movies.json?sort_by=" + this._sortby
    )
      .then(ret => ret.json())
      .then(json => json.data.movies)
      .catch(err => console.log(err));
  };

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      let movieObject = {
        movieTitle: movie.title_long,
        movieImage: movie.large_cover_image,
        movieGenres: movie.genres,
        movieSynopsis: movie.synopsis,
        movieRating: movie.rating,
        movieYear: movie.year
      };
      return (
        <Movie
          key={movie.id}
          movieObject={movieObject}
          /*
          movieTitle={movie.title_english}
          movieImage={movie.big_cover_image}
          movieGenres={movie.genres}
          movieSynopisi={movie.synopsis}
          movieRating={movie.rating}
          movieYear={movie.year}
          */
        />
      );
    });
    return movies;
  };

  render() {
    return (
      <div className={this.state.movies ? "App" : "AppLoading"}>
        {this.state.movies ? (
          <MovieHeader
            sortby={this._sortby}
            handleToApp={this._callMovieListFromChild}
          />
        ) : (
          ""
        )}
        {this.state.movies ? this._renderMovies() : "Loading"}
      </div>
    );
  }
}

export default App;
