import React from 'react';
import styled from 'styled-components';
import SearchInput from './SearchInput';

const SearchHeader = ({ keyword, results, handleChange, handleKeyPress }) => {
  console.log(typeof keyword);
  console.log(keyword);

  return (
    <Wrapper>
      <SearchInput search keyword={keyword} results={results} handleChange={handleChange} handleKeyPress={handleKeyPress} />
      <Title>Search results {keyword && `for ${keyword}`}</Title>
      <NavList>
        <NavItem>
          <a href='/'>Most Relevant</a>
        </NavItem>
        <NavItem>
          <a href='/'>Newest</a>
        </NavItem>
        <NavItem>
          <a href='/'>Oldest</a>
        </NavItem>
      </NavList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    justify-content: space-around;
    align-items: initial;
  }

  @media screen and (max-width: 640px) {
    flex-direction: column;
    justify-content: initial;
  }
`;

const Title = styled.h1`
  margin-right: auto;
  font-size: 30px;

  @media screen and (max-width: 640px) {
    margin: 0;
    display: none;
    width: auto;
  }
`;

const NavList = styled.ul`
  display: flex;

  @media screen and (max-width: 640px) {
    margin-left: -12px;
  }
`;

const NavItem = styled.li`
  padding: 8px 12px;
  color: #575757;
`;

export default SearchHeader;
