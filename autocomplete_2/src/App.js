import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import dbData from './db.json';

function App() {
  const [keyword, setKeyword] = useState(''); // 사용자가 입력하는 키워드
  const [results, setResults] = useState([]); // 키워드와 매칭되는 검색결과 배열

  // field에 따라 useState의 상태값을 변경하는 함수
  // (update props의 기본값은 true)
  const updateField = (field, value, update = true) => {
    // update가 true일 때만 onSearch 함수 실행 (=> false가 들어오면 onSearch 실행하지 않음)
    if (update) onSearch(value);

    // keyword는 키워드(입력값) 바로 반환
    // (= 인풋창의 value)
    // (=> 입력창에 '입력한 값' 또는 'SearchView에서 선택한 값'을 보여주는 역할만 함)
    if (field === 'keyword') setKeyword(value);

    // results는 onSearch를 실행한 결과값을 반환
    // (=> 키워드를 포함한 배열만 반환)
    if (field === 'results') setResults(value);
  };

  // db 데이터와 입력된 text를 비교하여 matchName의 값이 true인 경우만 모아 배열로 반환
  const onSearch = (text) => {
    let results = dbData.data.filter((item) => true === matchName(item.name, text));
    console.log(results); // [{…}, {…}]

    console.log({ results }); // results라는 key에 담긴 배열이 됨 => {results: Array(2)} (= results: (2) [{…}, {…}])
    setResults({ results });
    console.log(results); // 여기서의 results는 useState의 results (= {results: Array(2)})
  };

  // 입력된 keyword와 db 데이터의 name이 일치하는지 판별
  const matchName = (name, keyword) => {
    // 입력값이 비어있다면 (예: 아무 것도 입력 안하고 엔터)
    // false 반환(아무 것도 반환하지 않음)
    if (keyword === '') return false;

    // 앞에서부터 잘라서 비교 (첫 머리만 비교할 때)
    // let keyLen = keyword.length;
    // name = name.toLowerCase().substring(0, keyLen);

    // 입력값을 '포함'하는 결과들 반환
    name = name.toLowerCase();
    keyword = keyword.toString().toLowerCase();

    // return name === keyword.toString().toLowerCase();
    return name.includes(keyword);
  };

  return (
    <div className='App'>
      키워드 검색 자동완성
      <SearchBar keyword={keyword} results={results} updateField={updateField} />
    </div>
  );
}

export default App;
