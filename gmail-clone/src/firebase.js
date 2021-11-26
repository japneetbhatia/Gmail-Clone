// npm add firebase
import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAOL3Ue-mfY3lBNpBXhHIXErrXrBRRJEuI",
    authDomain: "clone-8bd66.firebaseapp.com",
    projectId: "clone-8bd66",
    storageBucket: "clone-8bd66.appspot.com",
    messagingSenderId: "733667346146",
    appId: "1:733667346146:web:0cc2d7b30c004e461940bb",
    measurementId: "G-6LNXXJGH28"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  // const db = firebaseApp.firestore();
  // const auth = firebase.auth();
  // const provider = new firebase.auth.GoogleAuthProvider();

  // export {db, auth, provider};