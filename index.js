// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
var firebaseConfig = {
  apiKey: "AIzaSyCMXax6pLJQfioio_hDuor39LJyOcA7pEM",
  authDomain: "portfolio-gadjee.firebaseapp.com",
  projectId: "portfolio-gadjee",
  storageBucket: "portfolio-gadjee.appspot.com",
  messagingSenderId: "476504235135",
  appId: "1:476504235135:web:5bb925a073d1ed7c3db34a",
  measurementId: "G-J01MQPJF9W"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
