import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Routes, Route, Link, useSearchParams, useNavigate } from 'react-router-dom';
import { getApi } from '../utils/getApi';
import { Header } from '../components';

const MainPage = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState([]);
  const [result, setResult] = useState();

  useEffect(() => {
    let completed = false;

    (async function getData() {
      const response = await getApi();
      console.log(response);
      if (!completed) {
        setData(response);
      }
    })();
    return () => {
      completed = true;
    };
  }, []);

  console.log(results);

  const searchKeyword = searchParams.get('keyword') || '';

  const handleChange = (e) => {
    setKeyword(e.target.value);

    if (data) {
      let filteredRes = data.filter((result) => matchInput(result.title, keyword) === true);
      console.log(filteredRes);
      setResults(filteredRes);
    }
  };

  // const onSearch = (input) => {

  // };

  const matchInput = (target, keyword) => {
    if (keyword === '') return false;

    target = target.toLowerCase();
    keyword = keyword.toString().toLowerCase();

    return target.includes(keyword); // true or false
  };

  const handelSubmit = (e) => {
    console.log(results);
    navigate(`/search?q=${keyword}`, { state: { results }, replace: false });
  };

  const handleKeyPress = (e) => {
    console.log(e.key);
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
                <SignUpBtn>Create account</SignUpBtn>
                <LogInBtn>Log in</LogInBtn>
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

const SignUpBtn = styled.button`
  height: 40px;
  color: #3b49df;
  border: 1px solid #3b49df;
  padding: 7px 15px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  border-radius: 6px;
  margin-bottom: 4px;

  &:hover {
    background: #3b49df;
    color: #fff;
  }
`;

const LogInBtn = styled.button`
  height: 40px;
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

const MainSection = styled.div``;
const RightNavbar = styled.div``;

export default MainPage;
