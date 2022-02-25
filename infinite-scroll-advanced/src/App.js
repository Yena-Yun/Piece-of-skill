import React from 'react';
import VirtualScroll from './VirtualScroll';

function App() {
  const arr = [...Array(10000).keys()];

  return (
    <div className='App'>
      <h1>Virtual Scroll</h1>
      <h2>Awesome</h2>
      <VirtualScroll style={{ height: '500px', overflowY: 'auto' }}>
        {arr.map((x) => (
          <div style={{ height: '30px' }}>Element {x}</div>
        ))}
      </VirtualScroll>
    </div>
  );
}

export default App;
