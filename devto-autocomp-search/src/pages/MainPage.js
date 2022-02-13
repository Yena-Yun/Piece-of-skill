import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { getApi } from 'utils/getApi';
import { Header } from 'components';
import LoginSignupBtn from 'utils/constants/LoginSignupBtn';

const MainPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    let completed = false;

    (async function getData() {
      const response = await getApi();
      if (!completed) {
        setData(response);
      }
    })();

    return () => {
      completed = true;
    };
  }, []);

  const handleChange = (e) => {
    setKeyword(e.target.value);
    handleSearch();
  };

  const handleSearch = () => {
    if (data) {
      let filteredRes = data.filter((result) => matchInput(result.title, keyword) === true);
      setResults(filteredRes);
    }
  };

  const matchInput = (target, keyword) => {
    if (keyword === '') return false;

    target = target.toLowerCase();
    keyword = keyword.toString().toLowerCase();
    return target.includes(keyword); // true or false
  };

  const handelSubmit = () => {
    navigate(`/search?q=${keyword}`, { state: { results }, replace: false });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handelSubmit();
    }
  };

  return (
    <>
      <Header keyword={keyword} results={results} handleChange={handleChange} handleKeyPress={handleKeyPress} />
      <Wrapper>
        <InnerBox>
          <LeftNavbar>
            <IntroBox>
              <IntroTitle>
                <TitleLink to='/'>DEV Community</TitleLink> is a community of 790,675 amazing developers
              </IntroTitle>
              <IntroDesc>We're a place where coders share, stay up-to-date and grow their careers.</IntroDesc>
              <EntryBtnGrop>
                <LoginSignupBtn main />
              </EntryBtnGrop>
            </IntroBox>
          </LeftNavbar>
          <MainSection></MainSection>
          <RightNavbar></RightNavbar>
        </InnerBox>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div``;

const InnerBox = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 16px;
  gap: 16px;
`;

const LeftNavbar = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const IntroBox = styled.div`
  width: 208px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  background: #fafafa;
  color: #404040;
  box-shadow: 0 0 0 1px rgba(23, 23, 23, 0.05);
`;

const IntroTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #242424;
  line-height: 1.25;
  margin-bottom: 16px;
`;

const TitleLink = styled(Link)`
  color: #3b49df;

  &:hover {
    color: #2f3ab2;
    text-decoration: underline solid #2f3ab2;
  }
`;

const IntroDesc = styled.p`
  color: #575757;
  margin-bottom: 16px;
  line-height: 1.5;
`;

const EntryBtnGrop = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainSection = styled.div``;
const RightNavbar = styled.div``;

export default MainPage;
