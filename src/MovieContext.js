import React, {useState, createContext} from 'react';
import Nav from './Nav';
import MovieList from './MovieList';

export const MovieContext = createContext();

export const MovieProvider = props => {
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
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
            {/* <Nav />
            <MovieList /> */}
        </MovieContext.Provider>
    );
}
