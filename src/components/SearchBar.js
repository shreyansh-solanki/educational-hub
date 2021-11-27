import {
  faLessThan,
  faMicrophone,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Input, InputGroup, Nav } from 'rsuite';

const inputStyles = {
  width: 300,
};

const inputText = {
  marginTop: 10,
};

const SearchContent = () => {
  // const [input, setInput] = useState('');

  // const onInptChange = ev => {
  //   setInput(ev);
  // };

  // const [results, setResults] = useState(null);
  // const maxResult = 1;
  // let i = 0;
  // const onSearch = () => {
  //   fetch(
  //     `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResult}&q=${input}&type=video&key=AIzaSyBI0F6ZXwj2WNw9g57Y7vkZmhxE1F3r80k`
  //   )
  //     .then(r => r.json())
  //     .then(result => {
  //       setResults(result);
  //       console.log(result.items[i++].snippet.channelTitle);
  //     });
  // };
  // // let count = 0;
  // // const allValue = () => {
  // //   for (let i = 0; i <= maxResult; i++) {
  // //     console.log(count++);
  // //   }
  // //   count = 0;
  // // };
  // const onKeyDown = ev => {
  //   if (ev.keyCode === 13) {
  //     // allValue();
  //     onSearch();
  //   }
  // };

  // const renderResults = () => {
  //   if (results && results.length === 0) {
  //     return <div>No results</div>;
  //   }
  //   if (results && results.length > 0) {
  //     return (
  //       <div>
  //         {results.map(item => (
  //           <div>
  //             {/* key={item.items[allValue()].id.videoId} */}
  //             {item.items[0].snippet.channelTitle}
  //           </div>
  //         ))}
  //       </div>
  //     );
  //   }
  //   return null;
  // };
  return (
    <>
      <Nav>
        <Nav style={inputText}>
          <InputGroup inside>
            <Input
              // onChange={onInptChange}
              // onKeyDown={onKeyDown}
              // value={input}
              size="md"
              style={inputStyles}
              placeholder="Search"
            />
            <InputGroup.Button
              // onClick={onSearch}
              style={{ marginLeft: 260 }}
            >
              <FontAwesomeIcon icon={faSearch} />
            </InputGroup.Button>
          </InputGroup>
        </Nav>
        <Nav>
          <Nav.Item>
            <FontAwesomeIcon icon={faMicrophone} />
          </Nav.Item>
        </Nav>
      </Nav>
    </>
  );
};

export default SearchContent;
