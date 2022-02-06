import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { SearchInput } from '../components';
import { Logo, Hamburger, SearchLinkBtn } from '../assets';

const Header = ({ value, handleChange, handleKeyPress, setVal }) => {
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
          <SearchInput header value={value} handleChange={handleChange} handleKeyPress={handleKeyPress} />
        </LogoSearchBox>
        <EntryBox>
          <SearchLink to='/search'>
            <SearchLinkBtn />
          </SearchLink>
          <LogInBtn>Log in</LogInBtn>
          <SignUpBtn>Create account</SignUpBtn>
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

const SearchLink = styled(Link)`
  display: none;
  margin: 0 4px;
  padding: 0 8px;
  width: 27px;
  height: 95%;
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

const LogInBtn = styled.button`
  height: 40px;
  margin-right: 8px;
  border: none;
  padding: 8px 16px;
  font-size: 16px;
  line-height: 24px;
  border-radius: 6px;
  color: #404040;

  &:hover {
    color: #2f3ab2;
    background: #ebecfc;
    text-decoration: underline solid #2f3ab2;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const SignUpBtn = styled.button`
  height: 40px;
  margin-right: 8px;
  color: #3b49df;
  border: 1px solid #3b49df;
  padding: 7px 15px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  border-radius: 6px;

  &:hover {
    background: #3b49df;
    color: #fff;
  }
`;

export default Header;
