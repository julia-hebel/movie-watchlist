import React from 'react';

function MovieCard({movie}) {
  return (
    <div>
      <img
        src={movie.movieUrl}
        className='object-cover h-full'
        alt={`${movie.movieTitle} image`}
        onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src='https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png';
          }}
      />
      <div className='text-center mt-2'>{movie.movieTitle}</div>
    </div>
  );
}

export default MovieCard;
