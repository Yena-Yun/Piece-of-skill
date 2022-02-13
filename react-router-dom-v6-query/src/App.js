import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Search from './Search';
import Result from './Result';

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const searchTerm = searchParams.get('result') || '';

  const handleSearch = (e) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e, target) => {
    if (target.charCode === 13) {
      navigate('/result');

      const result = e.target.value;

      if (result) {
        setSearchParams({ result });
      } else {
        setSearchParams({});
      }
    }
  };
  return (
    <Routes>
      <Route
        path='/'
        element={<Search input={input} handleSearch={handleSearch} handleKeyPress={handleKeyPress} searchTerm={searchTerm} />}
      />
      <Route path='/result' element={<Result input={input} />} />
    </Routes>
  );
}

export default App;
