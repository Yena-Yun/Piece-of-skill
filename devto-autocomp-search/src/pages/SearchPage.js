import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Header, SearchInput } from '../components';
import { useSearchParams } from 'react-router-dom';

const posts = ['Jenny', 'Rose', 'Jisu', 'Lisa'];

const SearchPage = ({ setVal }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchTerm = searchParams.get('name') || '';

  const handleChange = (e) => {
    setVal(e.target.value);
  };

  const handleSearch = (e) => {
    const name = e.target.value;

    if (name) {
      setSearchParams({ name });
    } else {
      setSearchParams({});
    }
  };

  return (
    <>
      <Header value={searchTerm} handleChange={handleSearch} />
      <Wrapper>
        <InnerBox>
          <SearchHeader>
            <div>
              <SearchInput value={searchTerm} handleChange={handleSearch} />
              <button>Search</button>
            </div>
            <Title>Search results</Title>
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
          </SearchHeader>
          <Section>
            <SideNav>
              <SideNavList>
                <SideNavItem>
                  <a href='/'>Posts</a>
                </SideNavItem>
                <SideNavItem>
                  <a href='/'>Podcasts</a>
                </SideNavItem>
                <SideNavItem>
                  <a href='/'>People</a>
                </SideNavItem>
                <SideNavItem>
                  <a href='/'>Tags</a>
                </SideNavItem>
                <SideNavItem>
                  <a href='/'>Comments</a>
                </SideNavItem>
                <SideNavItem>
                  <a href='/'>My posts only</a>
                </SideNavItem>
              </SideNavList>
            </SideNav>
            <Results>
              냠냠
              <ul>
                {posts
                  .filter((post) => post.toLowerCase().includes(searchTerm.toLowerCase()))
                  .map((post, idx) => (
                    <li key={idx}>{post}</li>
                  ))}
              </ul>
              {/* {data} */}
              {/* {filteredData
                .map((data, idx) => (
                  <ResultCard key={idx} data={data} />
                ))} */}
              {/* {data.map((el, idx) => <ResultCard key={idx} data={el} />)} */}
            </Results>
          </Section>
        </InnerBox>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div``;

const InnerBox = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SearchHeader = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 640px) {
    flex-direction: column;
  }
`;

const Title = styled.h1`
  font-size: 30px;

  @media screen and (max-width: 640px) {
    display: none;
  }
`;

const NavList = styled.ul`
  display: flex;
`;

const NavItem = styled.li`
  padding: 8px 12px;
  color: #575757;
`;

const Section = styled.div`
  display: flex;
`;

const SideNav = styled.div`
  width: 240px;
`;

const SideNavList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }

  @media screen and (max-width: 640px) {
    width: auto;
    flex-direction: row;
  }
`;

const SideNavItem = styled.li`
  padding: 8px;
  color: #090909;
  border-radius: 7px;
`;

const Results = styled.div``;

export default SearchPage;
