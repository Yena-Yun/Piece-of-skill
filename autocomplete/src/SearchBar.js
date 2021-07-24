import React from 'react';
import "./css/SearchBar.css";


const SearchBar = ({ results, keyword, updateField }) => {


		return(
			<div className="auto">
				<input
          className="search-bar"
          placeholder="Search"
          value={keyword}
          onChange={(e) => updateField("keyword", e.target.value)}
        />

        <div
          onClick={() => this.updateText(keyword)}
          className={`search-preview ${results.index === 0 ? "start" : ""}`}
        >
          <div className="first">
            <p className="position">{results.position}</p>
          </div>

          <div className="second">
            <p className="age">{results.age}</p>
          </div>
        </div>
			</div>
		);
};

export default SearchBar;