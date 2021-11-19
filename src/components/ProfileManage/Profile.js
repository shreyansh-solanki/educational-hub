import React, { useCallback } from 'react';
import { Button, Drawer, Dropdown, Notification, toaster } from 'rsuite';
import {
  isOfflineForDatabase,
  useProfile,
} from '../../context/profile.context';
import { auth, database } from '../../misc/firebase';
import AvatarUploadBtn from './AvatarUploadBtn';
import { getUserUpdates } from '../../misc/helpers';

const ProfileData = () => {
  const { profile } = useProfile();

  const onSignOut = useCallback(() => {
    database
      .ref(`/status/${auth.currentUser.uid}`)
      .set(isOfflineForDatabase)
      .then(() => {
        auth.signOut();
        toaster.push(
          <Notification type="info" header="info" duration={4000}>
            Signed Out
          </Notification>
        );
      })
      .catch(err => {
        toaster.push(
          <Notification type="info" header="info" duration={4000}>
            {err.message}
          </Notification>
        );
      });
  }, []);

  //   const onSave = async newData => {
  //     try {
  //       const updates = await getUserUpdates(
  //         profile.uid,
  //         'name',
  //         newData,
  //         database
  //       );

  //       await database.ref().update(updates);

  //       toaster.push(
  //         <Notification type="info" header="info" duration={4000}>
  //           Name has successfully edited
  //         </Notification>
  //       );
  //     } catch (err) {
  //       toaster.push(
  //         <Notification type="info" header="info" duration={4000}>
  //           {err.message}
  //         </Notification>
  //       );
  //     }
  //   };
  return (
    <>
      <h6>{profile.name}</h6>
      <AvatarUploadBtn />
      <Drawer.Actions>
        <Button block color="red" onClick={onSignOut}>
          Sign out
        </Button>
      </Drawer.Actions>
    </>
  );
};

export default ProfileData;
