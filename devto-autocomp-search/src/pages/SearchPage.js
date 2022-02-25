import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { getApi } from 'utils/getApi';
import { Header, ResultCard, SearchHeader, SideNav } from 'components';

const SearchPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState([]);
  const [value, setValue] = useState('');

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
    setValue(e.target.value);
    handleSearch();
  };

  const handleSearch = () => {
    if (data) {
      let filteredRes = data.filter((result) => matchInput(result.title, value) === true);
      setResults(filteredRes);
    }
  };

  const matchInput = (target, keyword) => {
    target = target.toLowerCase();
    if (keyword) keyword = keyword.toString().toLowerCase();
    return target.includes(keyword);
  };

  const handleSubmit = () => {
    navigate(`/search?q=${value}`, { state: { results }, replace: false });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setKeyword(value);
      handleSubmit();
    }
  };

  return (
    <>
      <Header keyword={value} results={results} handleChange={handleChange} handleKeyPress={handleKeyPress} setKeyword={setKeyword} />
      <Wrapper>
        <InnerBox>
          <SearchHeader search keyword={keyword} results={results} handleChange={handleChange} handleKeyPress={handleKeyPress} />
          <Section>
            <SideNav />
            <Results>
              {state?.results.map((result, idx) => (
                <ResultCard key={idx} result={result} />
              ))}
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
  max-width: 1024px;
  margin: 0 auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (max-width: 640px) {
    gap: 0;
    padding: 12px;
  }
`;

const Section = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  @media screen and (max-width: 640px) {
    display: initial;
  }
`;

const Results = styled.div`
  padding: 40px 30px;

  @media screen and (max-width: 768px) {
    padding: 12px 0;
  }

  @media screen and (max-width: 640px) {
    padding: 0;
  }
`;

export default SearchPage;
