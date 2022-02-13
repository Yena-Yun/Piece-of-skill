import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

const posts = ['Jenny', 'Rose', 'Jisu', 'Lisa'];

const Search = ({ input, searchTerm, handleSearch, handleKeyPress }) => {
  return (
    <>
      <h1>블랙핑크</h1>
      <input type='text' value={input} onChange={handleSearch} onKeyPress={handleKeyPress} />
      <ul>
        {posts
          .filter((post) => post.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((post, idx) => (
            <li key={idx}>{post}</li>
          ))}
      </ul>
    </>
  );
};

export default Search;
