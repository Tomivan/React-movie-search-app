import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchMovies from './components/searchmovies';
import './index.css'

class Main extends Component {
  render() {
    return (
     <div className="container">
        <h1 className="title">React Movie App</h1>
        <SearchMovies />
     </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
