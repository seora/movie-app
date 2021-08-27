import React from 'react';
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };


  //json 가져오는데 시간이 걸리기 때문에 비동기로 await 활용
  getMovies = async() => {
    const {data : {data : {movies}}} = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
    console.log(movies);
    this.setState({movies, isLoading : false});
  }

  componentDidMount(){
    this.getMovies();
  }

  //setstate를 호출할 때마다 react는 새로운 state와 함께 render 호출

  render(){

    const{ isLoading, movies } = this.state;

    return(
      <section className = "container">
        {isLoading? 
          (<div className = "loader">
            <span className="loader_text">"Loading..."</span>
          </div>)
          : (
            <div className = "movies">
              {
                movies.map(movie => (
                  <Movie 
                  key = {movie.id}
                  id = {movie.id} 
                  year = {movie.year} 
                  title = {movie.title} 
                  summary = {movie.summary}
                  poster = {movie.medium_cover_image}
                  genres = {movie.genres}
                  />
                ))
              }
            </div>
          )}
      </section>
    );
  }
}

export default App;
