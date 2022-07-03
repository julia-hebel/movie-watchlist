import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='w-full bg-violet-900 h-14 flex items-center justify-between'>
      <div className='font-bold text-lg sm:text-xl mx-1 sm:mx-4'>
        <Link className='p-2' to='/'>
          WatchList
        </Link>
      </div>
      <ul className='flex items-center justify-between text-sm sm:text-base mx-1 sm:mx-2'>
        <li className='mx-0.5 sm:mx-2'>
          <Link className='p-2 hover:underline' to='/'>
            Watch List
          </Link>
        </li>
        <li className='mx-0.5 sm:mx-2'>
          <Link className='p-2 hover:underline' to='/watched'>
            Watched
          </Link>
        </li>
        <li className='mx-0.5 sm:mx-2'>
          <Link className='p-2 hover:underline' to='/add'>
            + Add
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
