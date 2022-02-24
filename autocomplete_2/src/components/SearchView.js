import React from 'react';

const SearchView = ({ index, name, code, updateText }) => {
  return (
    <div className={`search-preview ${index === 0 ? 'start' : ''}`} onClick={() => updateText(name)}>
      <div className='first'>
        <p className='name'>{name}</p>
        <p className='code'>{code}</p>
      </div>
    </div>
  );
};

export default React.memo(SearchView);
