import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalState';
import Add from './components/Add';
import Header from './components/Header';
import Watched from './components/Watched';
import Watchlist from './components/WatchList';

function App() {
  return (
    <GlobalProvider>
      <div className='min-w-full min-h-screen bg-gray-800 text-white'>
        <Header />
        <Routes>
          <Route path='/' element={<Watchlist />} exact />
          <Route path='/watched' element={<Watched />} />
          <Route path='/add' element={<Add />} />
        </Routes>
      </div>
    </GlobalProvider>
  );
}

export default App;
