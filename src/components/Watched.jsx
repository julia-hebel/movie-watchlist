import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import MovieCard from './MovieCard';

function Watched() {
  const { watched } = useContext(GlobalContext);

  return (
    <div className='p-6'>
      {watched.length > 0 ? (
        <div>
          <div className='text-xl font-bold mb-6 flex justify-center'>
            Your Watched Movies
          </div>
          <div className='grid gap-6 auto-rows-fr grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 text-sm sm:text-base'>
            {watched.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type='WATCHED' />
            ))}
          </div>
        </div>
      ) : (
        <div className='w-full text-center text-xl font-bold'>
          Your Watched Movies List is empty
        </div>
      )}
    </div>
  );
}

export default Watched;
