import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyBJugqN66C8ncASECiRogBfDlzzpVB949Y",
  authDomain: "booksanta-303b5.firebaseapp.com",
  databaseURL: "https://booksanta-303b5.firebaseio.com",
  projectId: "booksanta-303b5",
  storageBucket: "booksanta-303b5.appspot.com",
  messagingSenderId: "175086267999",
  appId: "1:175086267999:web:8f54ea52822f41fd0ef5ea"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
