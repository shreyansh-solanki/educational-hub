import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, ButtonToolbar, Drawer, IconButton } from 'rsuite';
import { useModalState } from '../../misc/custom-hooks';
import '../../styles/Dashboard.Style.css';

const Dashboard = () => {
  const [size, setSize] = React.useState('xs');
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const handleOpen = key => {
    setOpen(true);
    setPlacement(key);
  };
  return (
    <div>
      <ButtonToolbar>
        <IconButton
          icon={<FontAwesomeIcon icon={faBars} />}
          onClick={() => handleOpen('left')}
        />
      </ButtonToolbar>
      <Drawer
        size={size}
        placement={placement}
        open={open}
        onClose={() => setOpen(false)}
      >
        <Drawer.Header>
          <Drawer.Title>Dashboard</Drawer.Title>
          <Drawer.Actions>
            {/* <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={() => setOpen(false)}>Confirm</Button> */}
          </Drawer.Actions>
        </Drawer.Header>
        <Drawer.Body>
          <div className="dash">
            <button type="button">Home</button>
          </div>
          <div className="dash">
            <button type="button">Recently Watched</button>
          </div>
          <div className="dash">
            <button type="button">Liked Video</button>
          </div>
          <div className="dash sign">
            <button type="button" className="sign">
              SignOut
            </button>
          </div>
        </Drawer.Body>
        {/* <Drawer.Body>Recently Watched</Drawer.Body>
        <Drawer.Body>Liked Video</Drawer.Body>
        <Drawer.Body>SignOut</Drawer.Body> */}
      </Drawer>
    </div>
  );
};

export default Dashboard;
