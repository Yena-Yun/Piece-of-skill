import React from "react";
import "./css/SearchBar.css";

const SearchBar = ({ results, keyword, updateField }) => {
  console.log(results);
  console.log(keyword);
  console.log(updateField);

  //input창에 사용자가 클릭한 항목의 text를 넣어주고 preview 항목을 지우는 함수
  var updateText = text => {
    console.log(text);
    updateField("keyword", text);
    updateField("results", []);
  };

  var cancelSearch = () => {
    updateField("keyword", "");
  };

  var renderResults = results.map(({ name }, index) => {
    return (
      <SearchPreview
        key={index}
        updateText={updateText}
        index={index}
        name={name}
      />
    );
  });

  return (
    <div className="auto">
      <button
        onClick={() => cancelSearch()}
        className={`cancel-btn ${keyword.length > 0 ? "active" : "inactive"}`}
      >
        x
      </button>
      <input
        className="search-bar"
        placeholder="Search"
        value={keyword}
        onChange={e => updateField("keyword", e.target.value)}
      />

      {results.length > 0 ? (
        <div className="search-results">{renderResults}</div>
      ) : null}
    </div>
  );
};

//stateless component to render preview results
const SearchPreview = ({ name, index, updateText }) => {
  return (
    <div
      onClick={() => updateText(name)}
      className={`search-preview ${index === 0 ? "start" : ""}`}
    >
      <div className="first">
        <p className="name">{name}</p>
      </div>
    </div>
  );
};

export default SearchBar;