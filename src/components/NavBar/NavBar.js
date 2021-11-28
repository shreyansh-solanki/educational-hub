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

const NavBar = () => {
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
    <Navbar style={{ background: '#333' }}>
      <Nav style={inputText}>
        <Dashboard />
      </Nav>
      <Navbar.Brand href="#" style={{ color: '#fff' }}>
        Educational Hub
      </Navbar.Brand>
      <Nav pullRight>
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
      {/* </Nav> */}
      {/* <FlexboxGrid justify="center" className="searchGroup1">
        <Nav>
          <SearchContent />
        </Nav>
      </FlexboxGrid> */}
    </Navbar>
  );
};

export default NavBar;
