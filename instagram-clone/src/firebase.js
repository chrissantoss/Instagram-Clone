import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDNiTt8QuXl1mjIrWnVAtLnKxlFjMf2CWg",
    authDomain: "instagram-clone-8a3b2.firebaseapp.com",
    databaseURL: "https://instagram-clone-8a3b2.firebaseio.com",
    projectId: "instagram-clone-8a3b2",
    storageBucket: "instagram-clone-8a3b2.appspot.com",
    messagingSenderId: "562224016632",
    appId: "1:562224016632:web:9dbbfa2a2cb436c1fe5f0d",
    measurementId: "G-P814P2X2VM"
  };


  const firebaseApp = firebase.initializeApp( {
  apiKey: "AIzaSyDNiTt8QuXl1mjIrWnVAtLnKxlFjMf2CWg",
  authDomain: "instagram-clone-8a3b2.firebaseapp.com",
  databaseURL: "https://instagram-clone-8a3b2.firebaseio.com",
  projectId: "instagram-clone-8a3b2",
  storageBucket: "instagram-clone-8a3b2.appspot.com",
  messagingSenderId: "562224016632",
  appId: "1:562224016632:web:9dbbfa2a2cb436c1fe5f0d",
  measurementId: "G-P814P2X2VM"
  });

  const db = firebaseApp.firestore(); // access db
  const auth = firebase.auth(); //create users 
  const storage = firebase.storage(); // pictures

  export {db, auth, storage}
 // export default firebaseConfig;