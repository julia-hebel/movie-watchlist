import React, { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import MovieControls from './MovieControls';

function MovieCard({ movie, type }) {
  const [movieControlsVisible, setMovieControlsVisible] = useState(false);

  return (
    <div className='flex flex-col relative'>
      <div className='relative'>
        <img
          src={movie.movieUrl}
          className='rounded-sm object-cover h-full'
          alt={`${movie.movieTitle} poster`}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src =
              'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png';
          }}
        />
        {!movieControlsVisible ? (
          <button
            className='w-2/12 h-2/12 absolute top-0 left-0'
            onClick={() => setMovieControlsVisible(true)}
          >
            <BsThreeDotsVertical className='w-full h-full py-2 text-white stroke-black stroke-1' />
          </button>
        ) : (
          <MovieControls
            movie={movie}
            type={type}
            setMovieControlsVisible={setMovieControlsVisible}
          />
        )}
      </div>
      <figcaption className='text-center mt-2'>{movie.movieTitle}</figcaption>
    </div>
  );
}

export default MovieCard;
