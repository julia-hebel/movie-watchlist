import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import MovieCard from './MovieCard';

function Watchlist() {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div className='p-6'>
      {watchlist.length > 0 ? (
        <div>
          <div className='text-xl font-bold mb-6 flex justify-center'>
            Your WatchList
          </div>
          <div className='grid gap-6 auto-rows-fr grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 text-sm sm:text-base'>
            {watchlist.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type='WATCHLIST' />
            ))}
          </div>
        </div>
      ) : (
        <div className='w-full text-center text-xl font-bold'>
          Your WatchList is empty
        </div>
      )}
    </div>
  );
}

export default Watchlist;
