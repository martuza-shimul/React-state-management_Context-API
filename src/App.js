import React from 'react';
import Nav from './Nav';
import MovieList from './MovieList';
import './App.css';
import {MovieProvider} from './MovieContext';

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
