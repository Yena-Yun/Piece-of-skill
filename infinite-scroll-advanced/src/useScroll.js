import { useState, useRef, useEffect } from 'react';

const useScroll = (props) => {
  const [scrollTop, setScrollTop] = useState(0);
  const ref = useRef();

  const onScroll = (e) => {
    requestAnimationFrame(() => {
      // console.log(e.target.scrollTop);
      setScrollTop(e.target.scrollTop);
    });
  };

  useEffect(() => {
    const scrollContainer = ref.current;
    // const scrollContainer = document.getElementById('container');

    scrollContainer.addEventListener('scroll', onScroll);

    setScrollTop(scrollContainer.scrollTop);

    return () => {
      scrollContainer.removeEventListener('scroll', onScroll);
    };
  }, []);

  return [scrollTop, ref];
};

export default useScroll;
