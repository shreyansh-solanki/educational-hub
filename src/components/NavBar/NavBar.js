import {
  faMicrophone,
  faSearch,
  faUserAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Dropdown, FlexboxGrid, Input, InputGroup, Nav, Navbar } from 'rsuite';

import '../../styles/NavBar.Style.css';

const inputStyles = {
  width: 300,
};

const inputText = {
  marginTop: 10,
};

// const renderIconButtonStyles = {
//   marginRight: 20,
//   marginTop: 20,
// };

const accountStateBtn = {
  marginTop: -57,
};

const accountIconButton = (props, ref) => {
  return <FontAwesomeIcon {...props} ref={ref} icon={faUserAlt} />;
};

const NavBar = () => {
  return (
    <Navbar>
      <Nav style={inputText}>{/* <Dashboard /> */}</Nav>
      <Navbar.Brand href="#">Educational Hub</Navbar.Brand>

      <FlexboxGrid justify="center" className="searchGroup1">
        <Nav>
          <Nav style={inputText}>
            <InputGroup inside>
              <Input size="md" style={inputStyles} placeholder="Search" />
              <InputGroup.Button>
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
        <Nav.Item>Login In</Nav.Item>
        <Nav.Item>Sign up</Nav.Item>
        {/* <Dropdown
            renderToggle={accountIconButton}
            placement="leftStart"
            style={{ marginRight: 30 }}
            >
            <Dropdown.Item>Account</Dropdown.Item>
            <Dropdown.Item>Account</Dropdown.Item>
            <Dropdown.Item>Account</Dropdown.Item>
        </Dropdown> */}
      </Nav>
    </Navbar>
  );
};

export default NavBar;
