import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

function Add() {
  const [movieTitle, setMovieTitle] = useState('');
  const [movieUrl, setMovieUrl] = useState('');
  const [lastMovieAdded, setLastMovieAdded] = useState('');
  const [errorType, setErrorType] = useState('');

  const { addMovieToWatchlist } = useContext(GlobalContext);

  function onSubmit(e) {
    e.preventDefault();

    if (!movieTitle || !movieUrl) {
      setErrorType('EMPTY');
      return;
    }

    if (!movieUrl.includes('.jpg'|'.jpeg'|'.png'|'.gif')) {
      setErrorType('INVALID_URL');
      return;
    }

    const id = new Date().getTime();
    const newMovie = { id, movieTitle, movieUrl };

    addMovieToWatchlist(newMovie);
    setErrorType('');
    setLastMovieAdded(movieTitle);
    setMovieTitle('');
    setMovieUrl('');
  }

  function renderFeedback() {
    if (errorType === 'EMPTY') {
      return (
        <div className='text-center mt-8 font-bold text-xl text-red-400'>
          Please fill all the inputs!
        </div>
      );
    } else if (errorType === 'INVALID_URL') {
      return (
        <div className='text-center mt-8 font-bold text-xl text-red-400'>
          URL is invalid!
        </div>
      );
    } else if (lastMovieAdded) {
      return (
        <div className='text-center mt-8 font-bold text-xl text-green-400'>
          {lastMovieAdded} was added successfully to Watch List!
        </div>
      );
    } else {
      return;
    }
  }

  return (
    <div className=''>
      <div className='w-full px-2 flex flex-col items-center'>
        <form
          className='mt-8 w-full sm:w-10/12 md:w-8/12 lg:6/12 xl:w-5/12 p-8 border border-white rounded-lg'
          onSubmit={onSubmit}
        >
          <div className='text-xl font-bold flex justify-center mb-8'>
            Add a movie to watch list
          </div>
          <div className='flex my-4 items-center'>
            <label className='mr-3 grow'>Title: </label>
            <input
              className='w-10/12 p-1 shrink-0 rounded text-black'
              type='text'
              placeholder='Movie title'
              value={movieTitle}
              onChange={(e) => setMovieTitle(e.target.value)}
            />
          </div>
          <div className='flex my-4 items-center'>
            <label className='mr-3 grow'>URL: </label>
            <input
              className='w-10/12 p-1 shrink-0 rounded text-black'
              type='text'
              placeholder='Movie image url'
              value={movieUrl}
              onChange={(e) => setMovieUrl(e.target.value)}
            />
          </div>
          <div className='flex justify-center mt-8'>
            <input
              type='submit'
              className='w-1/2 h-10 bg-green-600 rounded-md cursor-pointer'
              value='Add'
            />
          </div>
        </form>
      </div>
      <div className='w-full px-2'>{renderFeedback()}</div>
    </div>
  );
}

export default Add;
