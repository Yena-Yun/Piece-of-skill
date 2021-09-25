import React from 'react';
import './css/SearchBar.css';

const SearchBar = ({ results, keyword, updateField }) => {
  // results: onChange로 updateField 함수가 실행될 때마다 filter된 item들을 보여줄 배열 (= 자동완성 Preview 항목에 보여질 내용)
  console.log(results);

  // 삭제버튼 클릭 시
  var cancelSearch = () => {
    // keyword 자리(= 입력창)의 값 초기화
    updateField('keyword', '');
  };

  // updateText: Preview에서 선택(클릭)한 항목이 있을 때만 실행되는 함수!!
  var updateText = (text) => {
    // state의 keyword 키의 value로 입력한 값(text)을 넣음
    //  => 클릭한 항목의 내용을 입력창 안에 보여줌
    updateField('keyword', text);
    // state의 results 키의 value로 빈 배열 업데이트
    //  => 사용자가 특정 항목을 선택하고 나면 preview의 항목 내용을 삭제
    updateField('results', []);
  };

  return (
    <div className='auto'>
      {/* x 버튼 클릭 시 인풋창 내용 삭제 */}
      <button onClick={() => cancelSearch()} className={`cancel-btn ${keyword.length > 0 ? 'active' : 'inactive'}`}>
        x
      </button>

      {/* 사용자가 입력을 시작하면 바로 updateField 함수에 field로 'keyword' 키, value로 입력된 값 e.target.value 들어감 */}
      <input className='search-bar' placeholder='Search' value={keyword} onChange={(e) => updateField('keyword', e.target.value)} />

      {/* results 배열이 비어있지 않으면 -> Preview 항목 렌더링 */}
      {results.length > 0 ? ( // 일반소괄호 = return
        <div className='search-results'>
          {/* renderResults: results 배열에서 name과 index를 꺼내서 Preview에 전달 반환 - 꺼냄 (key값을 통해 객체로 꺼냄) */}
          {results.map(({ name, position }, index) => {
            console.log(name); // Andrew R. Kelly
            console.log({ name }); // {name: 'Andrew R. Kelly'}

            return <SearchPreview key={index} updateText={updateText} index={index} name={name} position={position} />;
          })}
        </div>
      ) : null}
    </div>
  );
};

// Preview 항목 보여주는 함수
const SearchPreview = ({ updateText, index, name, position }) => {
  return (
    // preview 중 선택(클릭)한 항목에 대해 updateText 함수 실행
    <div
      onClick={() => {
        updateText(name);
        updateText(position);
      }}
      className={`search-preview ${index === 0 ? 'start' : ''}`}
    >
      <div className='first'>
        <p className='name'>{name}</p>
      </div>
      <div className='second'>
        <p className='position'>{position}</p>
      </div>
    </div>
  );
};

export default SearchBar;
