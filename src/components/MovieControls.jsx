import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { FaTimes } from 'react-icons/fa';

function MovieControls({ movie, type, setMovieControlsVisible }) {
  const {
    removeMovieFromWatchlist,
    removeMovieFromWatched,
    moveMovieToWatched,
    moveMovieToWatchlist,
  } = useContext(GlobalContext);

  return (
    <div className='leading-none'>
      <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>   {/* dimmed background */}
      <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center'>
        <button
          className='w-11/12 h-1/6 my-1 px-1.5 hover:bg-white hover:opacity-80 hover:text-black border border-white rounded-md'
          onClick={
            type === 'WATCHLIST'
              ? () => moveMovieToWatched(movie)
              : () => moveMovieToWatchlist(movie)
          }
        >
          {type === 'WATCHLIST' ? 'MOVE TO WATCHED' : 'MOVE TO WATCHLIST'}
        </button>
        <button
          className='w-11/12 h-1/6 my-1 px-1.5 hover:bg-white hover:opacity-80 hover:text-black border border-white rounded-md'
          onClick={
            type === 'WATCHLIST'
              ? () => removeMovieFromWatchlist(movie.id)
              : () => removeMovieFromWatched(movie.id)
          }
        >
          DELETE
        </button>
      </div>
      <button
        className='w-3/12 h-3/12 absolute p-1 top-0 right-0'
        onClick={() => setMovieControlsVisible(false)}
      >
        <FaTimes className='w-full h-full text-white stroke-black stroke-2' />
      </button>
    </div>
  );
}

export default MovieControls;
