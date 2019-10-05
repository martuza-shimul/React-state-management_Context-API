import React, {useState} from 'react';
import Movie from './Movie';

const MovieList = () => {

    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$10',
            id: 23124
        },
        {
            name: 'Game of Thrones',
            price: '$15',
            id: 2566124
        },
        {
            name: 'Avengers:Endgame',
            price: '$20',
            id: 23524
        }
    ]);

    return(

        <div className="movieList">
            {movies.map(movie => (
                <Movie name={movie.name} price={movie.price} key={movie.id}/>
            ))}
        </div>
        
    );
}


export default MovieList;