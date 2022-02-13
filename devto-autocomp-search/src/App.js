import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useSearchParams, useNavigate } from 'react-router-dom';
import { getApi } from './utils/getApi';
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
