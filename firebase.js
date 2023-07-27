
// src/firebase.js
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  // Paste your Firebase configuration object here
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
