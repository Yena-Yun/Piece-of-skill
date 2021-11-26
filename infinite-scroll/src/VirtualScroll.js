import React from 'react';
import styled from 'styled-components';
import useScroll from './useScroll';
import Item from './Item';

const VirtualScroll = (props) => {
  const [scrollTop, ref] = useScroll();
  const totalItemCount = 100000;
  const itemHeight = 30;
  const totalHeight = itemHeight * totalItemCount;
  const containerHeight = 480;
  const nodePadding = 5;

  const startIndex = Math.max(Math.floor(scrollTop / itemHeight) - nodePadding, 0);
  const visibleNodeCount = Math.floor(containerHeight / itemHeight + 2 * nodePadding);
  const offsetY = startIndex * itemHeight;

  const renderVisibleChildren = new Array(visibleNodeCount)
    .fill(null)
    .map((_, idx) => <Item key={idx + startIndex} index={idx + startIndex} height={itemHeight} />);

  return (
    <Wrapper>
      <div
        ref={ref}
        id='viewport_container'
        style={{ border: '1px solid black', width: '200px', margin: 'auto', height: containerHeight, overflowY: 'auto' }}
      >
        <div id='virtual_container' style={{ height: totalHeight, position: 'relative' }}>
          <div style={{ transform: `translateY(${offsetY}px)` }}>{renderVisibleChildren}</div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default VirtualScroll;
