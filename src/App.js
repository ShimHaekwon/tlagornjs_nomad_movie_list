import React, { Component } from "react";
import MovieHeader from "./MovieHeader";
import MoviePages from "./MoviePages";
import Movie from "./Movie";
import "./App.css";

class App extends Component {
  state = {};

  _sortby = "rating";
  _orderby = "asc"; // desc
  _currentPage = 1;
  _queryTerm = "";
  _nextPage = 1;
  _pageBlock = 1;

  componentDidMount() {
    console.log("componentDidMount");
    this._getMovieList();
  }

  _callMovieListFromChild = parVal => {
    console.log(parVal);
    this._sortby = parVal.sortby;
    this._orderby = parVal.orderby;
    this._queryTerm = parVal.queryTerm;
    this._nextPage = parVal.nextPage;
    this._getMovieList();
  };

  _getMovieList = async () => {
    const moviesFromApi = await this._callApi();
    this.setState({
      movieData: moviesFromApi
    });
  };

  _callApi = () => {
    return fetch(
      "https://yts.am/api/v2/list_movies.json?order_by=" +
        this._orderby +
        "&sort_by=" +
        this._sortby +
        "&query_term=" +
        this._queryTerm +
        "&page=" +
        this._nextPage +
        "&limit=20"
    )
      .then(ret => ret.json())
      .then(json => json.data) // json.data.movies
      .catch(err => console.log(err));
  };

  _renderMovies = () => {
    const movies = this.state.movieData.movies.map(movie => {
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

  _renderMoviePages = () => {
    let movieDataObject = {
      movie_count: this.state.movieData.movie_count,
      page_number: this.state.movieData.page_number
    };
    console.log("movie_count:" + movieDataObject.movie_count);
    console.log("page_number:" + movieDataObject.page_number);
    return <MoviePages movieDataObject={movieDataObject} />;

    //return moviePages;
  };

  render() {
    return (
      <div className={this.state.movieData ? "App" : "AppLoading"}>
        {this.state.movieData ? (
          <MovieHeader
            sortby={this._sortby}
            orderby={this._orderby}
            queryTerm={this._queryTerm}
            handleToApp={this._callMovieListFromChild}
          />
        ) : (
          ""
        )}
        {this.state.movieData ? this._renderMoviePages() : "Loading"}
        {this.state.movieData ? this._renderMovies() : "Loading"}
      </div>
    );
  }
}

export default App;
