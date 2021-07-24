import React, { Component } from 'react';
import SearchBar from './SearchBar';


class App extends Component {
  state = {
    data: [
      { name: "Andrew R. Kelly", age: 22, position: "Janitor" },
      { name: "Adrian Sanchez", age: 30, position: "Teacher" },
      { name: "Anderson Brown", age: 25, position: "Principal" },
      { name: "Anna Valio", age: 30, position: "guidance councelor" },
      { name: "Asha Mathews", age: 50, position: "Teacher" },
      { name: "Alicia keys", age: 25, position: "Librarian" },
      { name: "Alexa Dot", age: 30, position: "teacher" },
      { name: "Bob Squarepants", age: 20, position: "secretary" },
    ],
    keyword: "",
    results: []
  };

  updateField = (field, value) => {
    this.onSearch(value);
    this.setState({ [field]: value });
  };

  // 찾으려는 값의 일부(keyword)만 입력해도 인식하는 함수
  // 예:"Andrea".substring(0,3)은 "And"를 반환
  // 대소문자 구분없이 인식하기 위해 모든 문자를 소문자로 설정
  matchName = (name, keyword) => {
    //입력한 값의 길이
    var keyLength = keyword.length;
    //입력한 값의 길이만큼 state의 name을 자름
    name = name.toLowerCase().substring(0, keyLength);
    //name에서 자른 부분과 입력한 값이 일치하고 입력한 값이 존재할 때 true 반환
    return name === keyword && keyLength !== 0;
  };

  onSearch = (text) => {
    let { data } = this.state;
    //text(입력한 값)과 data의 name이 일치하는 경우만 배열로 반환하여
    //state의 results 배열에 담는다 (= 자동완성목록)
    var results = data.filter(item => this.matchName(item.name, text));
    console.log(results);
    this.setState({ results });
  };
  
  render() {
    let { results, keyword } = this.state;

    return (
      <div className="App">
        <SearchBar
          results={results}
          keyword={keyword}
          updateField={this.updateField}
        />
      </div>
    );
  }
}

export default App;
