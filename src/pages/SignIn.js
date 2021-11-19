import React from 'react';
import firebase from 'firebase/compat/app';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Button,
  Col,
  Container,
  Grid,
  Notification,
  Panel,
  Row,
  toaster,
} from 'rsuite';
import '../styles/SignIn.Style.css';
import { auth, database } from '../misc/firebase';

const SignIn = () => {
  const signInWithProvider = async provider => {
    try {
      const { additionalUserInfo, user } = await auth.signInWithPopup(provider);

      if (additionalUserInfo.isNewUser) {
        await database.ref(`/profiles/${user.uid}`).set({
          name: user.displayName,
          createdAt: firebase.database.ServerValue.TIMESTAMP,
        });
      }
      toaster.push(
        <Notification type="info" header="info" duration={4000}>
          Signed In
        </Notification>
      );
    } catch (err) {
      toaster.push(
        <Notification type="info" header="info" duration={4000}>
          {err.message}
        </Notification>
      );
    }
  };

  // const onFacebookSignIn = () => {
  //   signInWithProvider(new firebase.auth.FacebookAuthProvider());
  // };
  const onGoogleSignIn = () => {
    signInWithProvider(new firebase.auth.GoogleAuthProvider());
  };

  return (
    <Container>
      <Grid className="mt-150">
        <Row>
          <Col xs={24} md={12} mdOffset={6}>
            <Panel>
              <div className="text-center">
                <h2>Welcome to our project</h2>
                <p className="mt-20">hello</p>
              </div>
              <div className="mt-20">
                <Button
                  block
                  className="bgc-blue tc-white"
                  onClick={onGoogleSignIn}
                >
                  <FontAwesomeIcon icon={faGoogle} className="mr-10" />
                  Continue With Google
                </Button>
              </div>
            </Panel>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};

export default SignIn;
