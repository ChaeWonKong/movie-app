import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  state = {

  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "Matrix",
            poster: "https://images-na.ssl-images-amazon.com/images/I/51EG732BV3L._SY445_.jpg"
          }, 
          {
            title: "Dallas Buyer's Club",
            poster: "https://m.media-amazon.com/images/M/MV5BMTYwMTA4MzgyNF5BMl5BanBnXkFtZTgwMjEyMjE0MDE@._V1_UX182_CR0,0,182,268_AL_.jpg",
          }, 
          {
            title: "Star Wars",
            poster: "https://imgc.allpostersimages.com/img/posters/star-wars-return-of-the-jedi_u-L-EZYVJ0.jpg?src=gp&w=300&h=375",
          },
          {
            title: "Gran Torino",
            poster: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/Gran_Torino_poster.jpg/220px-Gran_Torino_poster.jpg"
          },
          {
            title: "Django Unchained",
            poster: "https://images-na.ssl-images-amazon.com/images/I/81-FFd6v00L._SY445_.jpg"
          }
        ]
      })
    }, 2000)
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index}/>
    })
    return movies
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Loading..."}
      </div>
    )
  }
}

export default App;
