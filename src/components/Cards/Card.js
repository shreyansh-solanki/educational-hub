import React from 'react';
import { IconButton, Panel } from 'rsuite';
import { useProfile } from '../../context/profile.context';
import ProfileAvatar from '../ProfileManage/ProfileAvatar';

const Card = () => {
  const { profile } = useProfile();

  return (
    <div>
      <Panel bordered className="text-center">
        <img src="https://via.placeholder.com/300x240" height="240" alt="" />
        <Panel className="text-left">
          <p>
            <IconButton
              icon={<ProfileAvatar src={profile.avatar} name={profile.name} />}
              circle
              size="xs"
              className="text-left"
            />
            <em>A suite of React components</em>
          </p>
        </Panel>
      </Panel>
    </div>
  );
};

export default Card;
