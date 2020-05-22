import React from 'react';

export default function SearchMovies() {
    const searchMovies = async (e) => {
        e.preventDefault();
        console.log("submitting")

        const query = "Jurrasic Park";

        const url= `https://api.themoviedb.org/3/search/movie?
                   api_key=c6430c213d85cf7e17e9bbffaebe3245&language=en-US&query=${query}&page=1
                   include_adult=false`;
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
        }
        catch(err) {
            console.log(err);
        }
    }
    return (
        <form className="form" onSubmit={searchMovies}>
            <label htmlFor="query" className="query" > MOVIE NAME</label>
            <input type="text" className="query" placeholder="i.e Avengers" />
            <button type="submit" className="button"> Search</button>
        </form>
    )
}