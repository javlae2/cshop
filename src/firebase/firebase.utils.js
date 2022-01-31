import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyC6m5anFJfuSrJkRupNoojX1MzwAVis9mU",
    authDomain: "cshop-db.firebaseapp.com",
    projectId: "cshop-db",
    storageBucket: "cshop-db.appspot.com",
    messagingSenderId: "180090337958",
    appId: "1:180090337958:web:356799b60ec55c2e429267",
    measurementId: "G-6LPV4R5BSC"
  };


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;