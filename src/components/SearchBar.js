// import { faMicrophone, faSearch } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import React, { useState } from 'react';
// import { Input, InputGroup, Nav } from 'rsuite';
// import { apiGet } from '../context/config';
// import Main from './MainPage/Main';
// import Search from './SearchResult/Search';

// const inputStyles = {
//   width: 300,
// };

// const inputText = {
//   marginTop: 10,
// };

// const SearchContent = () => {
//   // const [input, setInput] = useState('');

//   // const onInptChange = ev => {
//   //   setInput(ev);
//   //   // console.log(ev);
//   // };

//   // const [results, setResults] = useState(null);
//   // const maxResult = 1;

//   // const onSearch = () => {
//   //   fetch(
//   //     `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResult}&q=${input}&type=video&key=AIzaSyBI0F6ZXwj2WNw9g57Y7vkZmhxE1F3r80k`
//   //   )
//   //     .then(r => r.json())
//   //     .then(result => {
//   //       setResults(result);
//   //       console.log(result);
//   //     });
//   // };

//   // const onKeyDown = ev => {
//   //   if (ev.keyCode === 13) {
//   //     onSearch();
//   //   }
//   // };

//   // const renderResults = () => {
//   //   if (results && results.length === 0) {
//   //     return <div>No results</div>;
//   //   }
//   //   if (results && results.length > 0) {
//   //     return (
//   //       <div>
//   //         {results.items.map(item => (
//   //           <div key={item.id.videoId}>{item.snippet.channelTitle}</div>
//   //         ))}
//   //       </div>
//   //     );
//   //   }
//   //   return null;
//   // };
//   const [input, setInput] = useState('');
//   const [results, setResults] = useState(null);

//   const onSearch = () => {
//     apiGet(`/search?part=snippet&maxResults=5&q=${input}&`).then(result => {
//       setResults(result);
//     });
//   };

//   const onInptChange = ev => {
//     setInput(ev);
//   };

//   const onKeyDown = ev => {
//     if (ev.keyCode === 13) {
//       onSearch();
//     }
//   };

//   const renderResults = () => {
//     if (input.length === 0) {
//       return <Main />;
//       //  <div>No results</div>;
//     }
//     if (results && input.length > 0) {
//       return <Search data={results.items} />;
//       // results.items.map(item => (
//       //   <div key={item.id.videoId}>{item.snippet.channelTitle}</div>
//       // ));
//     }
//     return null;
//   };
//   return (
//     <>
//       <Nav>
//         <Nav style={inputText}>
//           <InputGroup inside>
//             <Input
//               onChange={onInptChange}
//               onKeyDown={onKeyDown}
//               value={input}
//               size="md"
//               style={inputStyles}
//               placeholder="Search"
//             />
//             <InputGroup.Button onClick={onSearch} style={{ marginLeft: 260 }}>
//               <FontAwesomeIcon icon={faSearch} />
//             </InputGroup.Button>
//           </InputGroup>
//         </Nav>
//         <Nav>
//           <Nav.Item>
//             <FontAwesomeIcon icon={faMicrophone} />
//           </Nav.Item>
//         </Nav>
//       </Nav>
//     </>
//   );
// };

// export default SearchContent;
