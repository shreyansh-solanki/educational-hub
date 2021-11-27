import React, { useState } from 'react';

import { Input, InputGroup } from 'rsuite';
import { apiGet } from '../context/config';
import NavBar from '../components/NavBar/NavBar';
import Search from '../components/SearchResult/Search';

const inputStyle = {
  position: 'absolute',
  width: 200,
  height: 30,
};
const Home = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);
  const [searchOption, setSearchOption] = useState(null);

  const onSearch = () => {
    apiGet(`/search?part=snippet&maxResults=5&q=${input}&`).then(result => {
      setResults(result);
    });
  };

  const onInptChange = ev => {
    setInput(ev);
  };

  const onKeyDown = ev => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };

  const renderResults = () => {
    if (input.length === 0) {
      return <div>No results</div>;
    }
    if (results && input.length > 0) {
      return <Search data={results.items} />;
      // results.items.map(item => (
      //   <div key={item.id.videoId}>{item.snippet.channelTitle}</div>
      // ));
    }
    return null;
  };
  return (
    <>
      {/* <NavBar /> */}
      {/* <InputGroup inside > */}
      <Input
        onChange={onInptChange}
        onKeyDown={onKeyDown}
        value={input}
        size="md"
        style={inputStyle}
        placeholder="Search"
      />
      {/* </InputGroup> */}
      {/* <button
        id="dsa-search"
        type="button"
        value="dsa"
        onChange={onButtonChange}
      >
        DSA
      </button> */}

      <div>{renderResults()}</div>
    </>
  );
};

export default Home;
