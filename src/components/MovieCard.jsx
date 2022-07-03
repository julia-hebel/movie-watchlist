import React from 'react';

function MovieCard({ movie }) {
  return (
    <div className='flex flex-col'>
      <img
        src={movie.movieUrl}
        className='object-cover h-full'
        alt={`${movie.movieTitle} poster`}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src =
            'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png';
        }}
      />
      <figcaption className='text-center mt-2'>{movie.movieTitle}</figcaption>
    </div>
  );
}

export default MovieCard;
