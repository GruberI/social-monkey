import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBxRP6I0CuftxM0EYpwGLcQFluy4lfV9cE",
    authDomain: "socialmonkey-19a6c.firebaseapp.com",
    projectId: "socialmonkey-19a6c",
    storageBucket: "socialmonkey-19a6c.appspot.com",
    messagingSenderId: "923036007890",
    appId: "1:923036007890:web:e89711f7bca9b3ea3c5c0b"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider, storage };