import React, { createContext, useEffect, useReducer } from 'react';
import GlobalReducer from './GlobalReducer';

// initial state
const initialState = {
  watchlist: localStorage.getItem('watchlist')
    ? JSON.parse(localStorage.getItem('watchlist'))
    : [],
  watched: localStorage.getItem('watched')
    ? JSON.parse(localStorage.getItem('watched'))
    : [],
};

// create context
export const GlobalContext = createContext();

// provider component
export function GlobalProvider(props) {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(state.watchlist));
    localStorage.setItem('watched', JSON.stringify(state.watched));
  }, [state]);

  // actions
  function addMovieToWatchlist(movie) {
    dispatch({ type: 'ADD_MOVIE_TO_WATCHLIST', payload: movie });
  }

  const value = {
    watchlist: state.watchlist,
    watched: state.watched,
    addMovieToWatchlist,
  };

  return (
    <GlobalContext.Provider value={value}>
      {props.children}
    </GlobalContext.Provider>
  );
}
