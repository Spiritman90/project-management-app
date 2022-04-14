import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA3xkOyMBPOiIsU-dhzWe_Q9TxbtIOdFLw",
  authDomain: "dojoapp-19e4a.firebaseapp.com",
  projectId: "dojoapp-19e4a",
  storageBucket: "dojoapp-19e4a.appspot.com",
  messagingSenderId: "779272649408",
  appId: "1:779272649408:web:e9cb9ccb415a78d57d0b25",
};

//init
firebase.initializeApp(firebaseConfig);

//initialize services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

//timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp, projectStorage };
