import { faMicrophone, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import {
  Dropdown,
  FlexboxGrid,
  IconButton,
  Input,
  InputGroup,
  Nav,
  Navbar,
} from 'rsuite';
import Profile from '../ProfileManage/Profile';
import { ProfileProvider, useProfile } from '../../context/profile.context';

import '../../styles/NavBar.Style.css';
import ProfileAvatar from '../ProfileManage/ProfileAvatar';
import Dashboard from './Dashboard';
import SearchContent from '../Searchbar';

// const inputStyles = {
//   width: 300,
// };

const inputText = {
  marginTop: 10,
};

const accountStateBtn = {
  marginTop: -57,
};

const NavBar = () => {
  // const [input, setInput] = useState('');

  // const onInptChange = ev => {
  //   setInput(ev);
  // };

  const [results, setResults] = useState(null);

  // const onSearch = () => {
  //   fetch(
  //     `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${input}&type=video&key=AIzaSyAf6CJMn8jqyYLDojB7cZyK41y-qE0fsDI`
  //   )
  //     .then(r => r.json())
  //     .then(result => {
  //       setResults(result);
  //       console.log(result.items[0].snippet.channelTitle);
  //     });
  // };

  // const renderResults = () => {
  //   if (results && results.length === 0) {
  //     return <div>No results</div>;
  //   }
  //   if (results && results.length > 0) {
  //     return (
  //       <div>
  //         {results.map(item => (
  //           <div key={item.items[0].id.videoId}>
  //             {item.items[0].snippet.channelTitle}
  //           </div>
  //         ))}
  //       </div>
  //     );
  //   }
  //   return null;
  // };

  // const onKeyDown = ev => {
  //   if (ev.keyCode === 13) {
  //     onSearch();
  //   }
  // };

  const { profile } = useProfile();

  const accountIconButton = (props, ref) => {
    return (
      <IconButton
        {...props}
        ref={ref}
        icon={<ProfileAvatar src={profile.avatar} name={profile.name} />}
        circle
        size="xs"
      />
    );
  };

  return (
    <Navbar>
      <Nav style={inputText}>
        <Dashboard />
      </Nav>
      <Navbar.Brand href="#">Educational Hub</Navbar.Brand>

      <FlexboxGrid justify="center" className="searchGroup1">
        <Nav>
          <SearchContent />
        </Nav>
      </FlexboxGrid>

      <Nav pullRight style={accountStateBtn} className="accountStateBtn1">
        <ProfileProvider>
          <Dropdown renderToggle={accountIconButton} placement="leftStart">
            {/* <Dropdown.Item> */}
            <Profile />
            {/* </Dropdown.Item> */}
            {/* <Dropdown.Item>Account</Dropdown.Item>
              <Dropdown.Item>Account</Dropdown.Item> */}
          </Dropdown>
        </ProfileProvider>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
