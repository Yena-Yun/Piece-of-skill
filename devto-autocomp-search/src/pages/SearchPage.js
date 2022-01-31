import React from 'react';
import styled from 'styled-components';
import { Header, SearchInput, Card } from '../components';

const SearchPage = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <InnerBox>
          <SearchHeader>
            <SearchInput search />
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
              <Card />
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
