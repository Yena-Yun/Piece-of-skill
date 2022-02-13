import React from 'react';
import styled, { css } from 'styled-components';
import { SearchBtnIcon } from 'assets';

const SearchInput = ({ header, search, keyword, handleChange, handleKeyPress }) => {
  const styles = {
    header,
    search,
  };

  return (
    <Wrapper>
      <SearchBox {...styles}>
        <ElSearchInput placeholder='Search...' value={keyword} onChange={handleChange} onKeyPress={handleKeyPress} />
        <SearchBtn onKeyPress={handleKeyPress}>
          <SearchBtnIcon />
        </SearchBtn>
      </SearchBox>
    </Wrapper>
  );
};

SearchInput.defaultProps = {
  header: false,
  search: false,
};

const Wrapper = styled.div``;

const SearchBox = styled.div`
  width: 420px;
  height: 40px;
  margin: 0 16px;
  position: relative;

  @media screen and (max-width: 768px) {
    ${(props) =>
      props.header &&
      css`
        display: none;
      `};

    ${(props) =>
      props.search &&
      css`
        width: auto;
        display: block;
        margin: 0;
      `};
  }

  @media screen and (min-width: 768px) {
    ${(props) =>
      props.search &&
      css`
        display: none;
      `};
  }

  @media screen and (max-width: 640px) {
    width: 100%;
    margin: 0;
    margin-bottom: 8px;
  }
`;

const ElSearchInput = styled.input`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: calc(0.5em - 1px) 0.5em;
  font-size: 16px;
  border: 1px solid #d4d4d4;
  border-radius: 7px;
`;

const SearchBtn = styled.button`
  position: absolute;
  top: 1px;
  right: 1px;
  padding: 0 9px;
  height: 95%;
  border-radius: 7px;

  &:hover {
    background: #ebecfc;

    & svg {
      fill: #2f3ab2;
    }
  }
`;

export default SearchInput;
