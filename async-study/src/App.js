import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import useDidMountEffect from './useDidMountEffect';

function App() {
  // 바뀌면 HTML 재렌더링이 필요한 변수들만 state로 만들기
  let [count, setCount] = useState(0);
  let [age, setAge] = useState(20);

  // 처음 페이지 로드시 useEffect 실행을 막는 코드 적용
  // (연관파일: useDidMountEffect.js)
  useDidMountEffect(() => {
    if (count < 3) setAge(age + 1);
  }, [count]);

  // 또는 count 변수를 한번 더 활용
  // count가 0일 때(페이지가 처음 로드되었을 때) 내부코드를 동작시키지 않음
  // useEffect(() => {
  //   if (count !== 0 && count < 3) setAge(age + 1);
  // }, [count]);

  return (
    <div>
      <div>안녕하십니까 전 {age}</div>
      <button onClick={() => {
        setCount(count + 1);
      }}>누르면 한살 먹기</button>
    </div>
  );
}

export default App;
