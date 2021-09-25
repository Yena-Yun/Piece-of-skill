import SearchBar from './SearchBar';
import './App.css';

import React, { Component } from 'react';

class App extends Component {
  state = {
    data: [
      { name: 'Andrew R. Kelly', age: 22, position: 'Janitor' },
      { name: 'Adrian Sanchez', age: 30, position: 'Teacher' },
      { name: 'Anderson Brown', age: 25, position: 'Principal' },
      { name: 'Anna Valio', age: 30, position: 'guidance councelor' },
      { name: 'Asha Mathews', age: 50, position: 'Teacher' },
      { name: 'Alicia keys', age: 25, position: 'Librarian' },
      { name: 'Alexa Dot', age: 30, position: 'teacher' },
      { name: 'Bob Squarepants', age: 20, position: 'secretary' },
    ],
    // keyword = 인풋창 안의 내용
    keyword: '',
    // results = 자동완성 preview항목 내용
    results: [],
  };

  // 2. item의 name 중에 keyword를 포함하는 item이 있는지 확인하는 기능
  matchName = (name, keyword) => {
    var keyLen = keyword.length;

    name = name.toLowerCase().substring(0, keyLen);

    if (keyword === '') return false;

    return name === keyword;
  };

  matchPosition = (position, keyword) => {
    var keyLen = keyword.length;

    position = position.toLowerCase().substring(0, keyLen);

    if (keyword === '') return false;

    return position === keyword;
  };

  // 3. match 함수로 거른 item을 state에 넣어주는 역할만 하는 기능
  onSearch = (text) => {
    let data = this.state.data;

    // (걸러낸 item을 담는 변수 이름이 state의 key 이름(results)과 똑같아야 함 - 변수를 resultArry 등으로 바꾸면 자동완성 항목이 나타나지 않음)
    var results = data.filter((item) => true === this.matchName(item.name, text) || true === this.matchPosition(item.position, text));
    // console.log('matchName으로 걸러진 item들 배열:' + results);

    // { results }: matchName으로 걸러진 item 배열을 'results'라는 객체에 넣음 (콘솔에 {results: Array(2)}라고 찍힘 - 안에 요소가 2개 들어간 배열을 가진 results라는 이름의 객체)
    console.log({ results }); // (한 마디로 '객체'화)

    this.setState({ results });
  };

  // 1. 사용자한테 입력된 값을 'keyword' 키(= field)로 받음
  updateField = (field, value) => {
    console.log('updateField 함수:' + field); // 입력되는 동안 계속 'keyword'로 찍힘
    console.log('updateField 함수:' + value); // 인풋창에 입력되고 있는 값 그대로 찍힘

    // onSearch 함수에 입력된 값(= keyword)을 넣어주고
    this.onSearch(value);

    // setState의 'keyword' 키로 받아온 입력값(value)이 들어감
    this.setState({ [field]: value });

    // (주의: 항목 중 하나를 '클릭'한 경우에는 updateField가 아닌 'updateText' 함수가 실행 => field에 'keyword' 키로 클릭한 항목의 내용, 'result' 키로 빈 배열 넣음)
  };

  render() {
    // SearchBar에서 updateField 함수 처리를 할 수 있게 keyword와 results 키의 value 자리를 가져옴
    let { results, keyword } = this.state; // (비구조화 할당)

    return (
      <div className='App'>
        <SearchBar results={results} keyword={keyword} updateField={this.updateField} />
      </div>
    );
  }
}

export default App;
