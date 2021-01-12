import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC9LEx5kXkZYxuhjUA9TMYn6BcOWXfgM4w",
  authDomain: "socialmonkey1-2d913.firebaseapp.com",
  projectId: "socialmonkey1-2d913",
  storageBucket: "socialmonkey1-2d913.appspot.com",
  messagingSenderId: "541475380801",
  appId: "1:541475380801:web:1d980234e5d8ead65270c0"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider, storage };