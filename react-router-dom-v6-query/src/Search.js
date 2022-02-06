import React from 'react';
import { useSearchParams } from 'react-router-dom';

const posts = ['Jenny', 'Rose', 'Jisu', 'Lisa'];

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchTerm = searchParams.get('name') || '';

  const handleSearch = (e) => {
    const name = e.target.value;

    if (name) {
      setSearchParams({ name });
    } else {
      setSearchParams({});
    }
  };

  return (
    <>
      <h1>블랙핑크</h1>
      <input type='text' value={searchTerm} onChange={handleSearch} />
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
