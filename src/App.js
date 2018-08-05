import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movieTitles = [
  "Matrix",
  "Dallas Buyer's Club",
  "Star Wars",
  "Gran Torino",
]

const movieImages = [
  "https://images-na.ssl-images-amazon.com/images/I/51EG732BV3L._SY445_.jpg",
  "https://m.media-amazon.com/images/M/MV5BMTYwMTA4MzgyNF5BMl5BanBnXkFtZTgwMjEyMjE0MDE@._V1_UX182_CR0,0,182,268_AL_.jpg",
  "https://imgc.allpostersimages.com/img/posters/star-wars-return-of-the-jedi_u-L-EZYVJ0.jpg?src=gp&w=300&h=375",
  "https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/Gran_Torino_poster.jpg/220px-Gran_Torino_poster.jpg"
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movieTitles[0]} poster={movieImages[0]} />
        <Movie title={movieTitles[1]} poster={movieImages[1]} />
        <Movie title={movieTitles[2]} poster={movieImages[2]} />
        <Movie title={movieTitles[3]} poster={movieImages[3]} />
      </div>
    )
  }
}

export default App;
