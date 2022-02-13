import React from 'react';
import styled from 'styled-components';

const SideNav = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @media screen and (max-width: 640px) {
    margin-left: -16px;
  }

  @media screen and (max-width: 553px) {
    width: 500px;
    overflow-x: auto;
  }
`;

const SideNavList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 640px) {
    padding: 4px;
    flex-direction: row;
  }

  @media screen and (max-width: 553px) {
    min-width: 540px;
  }
`;

const SideNavItem = styled.li`
  width: 240px;
  padding: 8px;
  color: #090909;
  border-radius: 7px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  @media screen and (max-width: 640px) {
    width: auto;
    padding: 8px 12px;
    color: #575757;
  }

  &:first-child {
    font-weight: 700;
    background: #fff;

    @media screen and (max-width: 640px) {
      font-weight: 400;
      background: transparent;
    }
  }
`;

export default SideNav;
