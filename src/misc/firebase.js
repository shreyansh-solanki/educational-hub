import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const config = {
  apiKey: 'AIzaSyAf6CJMn8jqyYLDojB7cZyK41y-qE0fsDI',

  authDomain: 'educational-hub-eb7f5.firebaseapp.com',

  databaseURL:
    'https://educational-hub-eb7f5-default-rtdb.asia-southeast1.firebasedatabase.app',

  projectId: 'educational-hub-eb7f5',

  storageBucket: 'educational-hub-eb7f5.appspot.com',

  messagingSenderId: '817159881624',

  appId: '1:817159881624:web:0722a1bca0561d5204a1ed',
};

const app = firebase.initializeApp(config);

export const auth = app.auth();
export const database = app.database();
