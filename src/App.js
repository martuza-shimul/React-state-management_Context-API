import React from 'react';
import Nav from './Nav';
import MovieList from './MovieList';
import './App.css';
import AddMovie from './AddMovie';
import {MovieProvider} from './MovieContext';

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
