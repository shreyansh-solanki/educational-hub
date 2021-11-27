import React, { useState } from 'react';

import { Input, InputGroup } from 'rsuite';
import { apiGet } from '../context/config';
import NavBar from '../components/NavBar/NavBar';

const Home = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);

  const onSearch = () => {
    apiGet(`/search?part=snippet&maxResults=1&q=${input}&`).then(result => {
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
      // if (results.items.length) {
      // <div>
      return results.items.map(item => (
        <div key={item.id.videoId}>{item.snippet.channelTitle}</div>
      ));
      // {results.items.map(item => (
      // <div key={item.id.videoId}>{item.snippet.channelTitle}</div>
      // ))}
      // </div>;
    }
    // }
    return null;
  };
  return (
    <>
      {/* <NavBar /> */}
      {/* <SearchBar /> */}
      {/* <InputGroup inside style={{ width: 100, height: 30 }}> */}
      <Input
        onChange={onInptChange}
        onKeyDown={onKeyDown}
        value={input}
        size="md"
        // style={inputStyles}
        placeholder="Search"
      />
      {/* </InputGroup> */}

      <div>{renderResults()}</div>
    </>
  );
};

export default Home;
