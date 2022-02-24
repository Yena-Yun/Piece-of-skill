import React, { useState, useEffect } from 'react';
import useDidMountEffect from './hooks/useDidMountEffect';

function App() {
  let [count, setCount] = useState(0);
  let [age, setAge] = useState(20);

  // 처음 페이지 로드 시 useEffect 실행을 막는 custom hook 사용
  useDidMountEffect(() => {
    if (count < 3) setAge(age + 1);
  }, [count]);

  // // 또는 useEffect + count 변수 자체를 활용하는 방법
  // // count가 0일 때(페이지가 처음 로드되었을 때)는 내부코드를 동작시키지 않음
  // useEffect(() => {
  //   if (count !== 0 && count < 3) setAge(age + 1);
  // }, [count]);

  return (
    <div>
      <div>안녕하십니까 전 {age}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        누르면 한살 먹기
      </button>
    </div>
  );
}

export default App;
