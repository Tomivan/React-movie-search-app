import React, { useState } from 'react';
import MovieCard from './moviecard';
import '../index.css'

export default function SearchMovies() {

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();

        const url= `https://api.themoviedb.org/3/search/movie?api_key=c6430c213d85cf7e17e9bbffaebe3245&language=en-US&query=${query}&page=1
                   include_adult=false`;
        try{
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.results);
        }
        catch(err) {
            console.log(err);
        }
    }
    return (
        <>
        <form className="form" onSubmit={searchMovies}>
            <label htmlFor="query" className="label" > MOVIE NAME</label>
            <input type="text" className="input" placeholder="i.e Avengers" 
            value={query} onChange={(e) => setQuery(e.target.value)}/>
            <button type="submit" className="button"> Search</button>
        </form>
        <div className="card-list">
            {movies.filter(movie => movie.poster_path).map(movie => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
        </>
    )
}