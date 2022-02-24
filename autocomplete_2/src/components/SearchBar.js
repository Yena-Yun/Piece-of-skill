import React from 'react';
import SearchView from './SearchView';

const SearchBar = ({ keyword, results, updateField }) => {
  // SearchView 결과 중 하나를 클릭하면 SearchBar 안에 name을 보여주는 함수
  // ('인풋창의 text를 업데이트')
  const updateText = (text) => {
    updateField('keyword', text, false);
    updateField('results', []);
  };

  console.log(results); // {results: [{...}, {...}]}

  // 자동검색결과에 렌더링할 배열(= results의 'results' 키에 담긴 값)을 가져온다
  const arr = results['results'];

  // renderResults 변수 (전역으로 쓰기 위해 미리 선언)
  let renderResults;

  // 렌더링할 배열이 있다면
  if (arr) {
    // arr에서 하나씩 꺼내서 SearchView 컴포넌트에 전달한 결과를 renderResults에 담는다
    // (=> SearchBar 컴포넌트에서 인풋창 아래에 렌더링)
    renderResults = arr.map((item, idx) => {
      return <SearchView key={idx} index={item.code} name={item.name} code={item.code} updateText={updateText} />;
    });
  }

  return (
    <div className='auto'>
      {/* SearchBar 인풋창 */}
      <input className='search-bar' placeholder='Search' value={keyword || ''} onChange={(e) => updateField('keyword', e.target.value)} />
      {/* 인풋창 아래에 뜨는 검색결과: renderResults를 보여줌 */}
      <div className='search-results'>{renderResults}</div>
    </div>
  );
};

export default SearchBar;
