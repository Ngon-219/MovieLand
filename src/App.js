import React, { useState } from 'react';
import './App.css'
import { useEffect } from 'react';
import SearchIcon from './search.svg';

import MovieCard from './movieCard';
// 82a7fb15

const API_URL = ' http://www.omdbapi.com/?i=tt3896198&apikey=82a7fb15';

const movie1 = {
    Poster: "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg",
    Title: "Italian Spiderman",
    Type: "movie",
    Year: "2007",
    imdbID: "tt2705436"
}

const App = () => {

    const [movie, setMovies] = useState([]);
    const [searchTerm, SetSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }
    
    useEffect( () => {
        searchMovies('Spiderman');
    }, []);

    return (
        <div className = "app">
            <h1>Ngon's Movie</h1>

            <div className="search">
                <input
                 placeholder='Search smt here' 
                 value={searchTerm}
                 onChange={(e) => {
                    SetSearchTerm(e.target.value);
                 }}
                 />
                 <img 
                 src= {SearchIcon}
                 alt="search"
                 onClick={() => {searchMovies(searchTerm)}}
                 />
            </div>

            {movie.length > 0 
                ? (
                    <div className='container'>
                    {movie.map((movie) => (
                        <MovieCard movie1={movie} />
                ))}
                </div>  
                 ) : (
                <div className='empty'>
                    <h2>No movies found</h2>
                </div>
            )}


        </div>
    );
}

export default App;