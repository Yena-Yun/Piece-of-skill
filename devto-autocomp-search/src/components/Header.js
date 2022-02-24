import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { SearchInput } from 'components';
import { Logo, Hamburger, SearchLinkBtn } from 'assets';
import LoginSignupBtn from 'utils/LoginSignupBtn';

const Header = ({ keyword, results, handleChange, handleKeyPress }) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <InnerWrap>
        <LogoSearchBox>
          <LogoBox>
            <MenuBtn>
              <Hamburger />
            </MenuBtn>
            <LogoLink to='/'>
              <LogoImg src={Logo} alt='site-logo' />
            </LogoLink>
          </LogoBox>
          <SearchInput header keyword={keyword} results={results} handleChange={handleChange} handleKeyPress={handleKeyPress} />
        </LogoSearchBox>
        <EntryBox>
          <SearchBtn onClick={() => navigate('/search')}>
            <SearchLinkBtn />
          </SearchBtn>
          <LoginSignupBtn top />
        </EntryBox>
      </InnerWrap>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 57px;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 0 16px;
  border-bottom: 1px solid #d4d4d4;

  @media screen and (max-width: 768px) {
    padding: 0;
  }

  @media screen and (max-width: 1024px) {
    padding: 0 8px;
  }
`;

const InnerWrap = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const LogoSearchBox = styled.div`
  display: flex;
`;

const LogoBox = styled.div`
  display: flex;
`;

const MenuBtn = styled.button`
  display: none;
  padding: 8px;
  margin: 0 8px;

  @media screen and (max-width: 768px) {
    display: block;
    margin-left: 0;
  }
`;

const LogoLink = styled(Link)`
  width: 50px;
  height: 40px;
`;

const LogoImg = styled.img`
  width: 100%;
`;

const EntryBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 16px;

  @media screen and (max-width: 768px) {
    padding-right: 8px;
  }
`;

const SearchBtn = styled.button`
  display: none;
  margin: 0 4px;
  padding: 0 8px;
  width: 40px;
  height: 40px;
  border-radius: 7px;

  &:hover {
    background: #ebecfc;

    & svg {
      fill: #2f3ab2;
    }
  }

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Header;
