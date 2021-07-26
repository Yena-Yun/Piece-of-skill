import SearchBar from "./SearchBar";
import "./App.css";

import React, { Component } from "react";

class App extends Component {
  state = {
    data: [
      { name: "React" },
      { name: "Go" },
      { name: "Java" },
      { name: "Javascript" },
      { name: "Python" },
      { name: "React native" },
      { name: "Node.js" },
      { name: "Vue" }
    ],
    keyword: "",
    results: []
  };

  matchName = (name, keyword) => {
    console.log(name);
    console.log(keyword);
    var keyLen = keyword.length;
    console.log(keyLen);

    name = name.toLowerCase().substring(0, keyLen);
    console.log(name);

    if (keyword === "") return false;

    return name === keyword;
  };

  onSearch = text => {
    let data = this.state.data;

    var results = data.filter(item => true === this.matchName(item.name, text));

    this.setState({ results });
  };

  updateField = (field, value) => {
    console.log(field, value);
    this.onSearch(value);
    this.setState({ [field]: value });
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