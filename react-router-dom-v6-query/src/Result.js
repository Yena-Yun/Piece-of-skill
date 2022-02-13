import React from 'react';

const Result = ({ posts, searchTerm, input }) => {
  return (
    <>
      <h1>블랙핑크</h1>
      <div>{input}</div>
      {/* <input type='text' value={searchTerm} onChange={handleSearch} onKeyPress={handleKeyPress} />
      <ul>
        {posts
          .filter((post) => post.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((post, idx) => (
            <li key={idx}>{post}</li>
          ))}
      </ul> */}
    </>
  );
};

export default Result;
