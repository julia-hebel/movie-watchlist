import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import MovieCard from './MovieCard';

function Watchlist() {
  const { watchlist } = useContext(GlobalContext);
  return (
    <div className='p-6'>
      {watchlist.length > 0 ? (
        <div className='grid gap-6 auto-rows-fr grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8'>
          {watchlist.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      ) : (
        <div className='w-full text-center text-xl font-bold'>WatchList is empty</div>
      )}
    </div>
  );
}

export default Watchlist;
