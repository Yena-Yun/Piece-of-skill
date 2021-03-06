import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getApi } from 'utils/getApi';
import { Header } from 'components';

const MainPage = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
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
    return target.includes(keyword);
  };

  const handleSubmit = () => {
    if (!keyword) return false;

    navigate(`/search?q=${keyword}`, { state: { results }, replace: false });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <>
      <Header keyword={keyword} results={results} handleChange={handleChange} handleKeyPress={handleKeyPress} />
    </>
  );
};

export default MainPage;
