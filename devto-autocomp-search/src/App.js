import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/search' element={<SearchPage />} />
    </Routes>
  );
}

export default App;
