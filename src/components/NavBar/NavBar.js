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
import SearchBar from '../SearchBar';
import Dashboard from './Dashboard';

const inputStyles = {
  width: 300,
};

const inputText = {
  marginTop: 10,
};

const accountStateBtn = {
  marginTop: -57,
};

const NavBar = () => {
  const [input, setInput] = useState('');

  const onInptChange = ev => {
    setInput(ev);
  };

  const onSearch = () => {
    console.log('search');
  };

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
          <Nav style={inputText}>
            <InputGroup inside>
              {/* <InputGroup.Button> */}
              {/* </InputGroup.Button> */}
              <SearchBar>
                {/* <input type="text" onChange={onInptChange} /> */}
                <Input
                  onChange={onInptChange}
                  value={input}
                  size="md"
                  style={inputStyles}
                  placeholder="Search"
                />
              </SearchBar>
              <InputGroup.Button onClick={onSearch} style={{ marginLeft: 260 }}>
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
