// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
let firebaseConfig = {
  apiKey: "AIzaSyBU5IfhfWDcPZNvjMUqLyuJHWDK1jjE8r8",
  authDomain: "react-38a11.firebaseapp.com",
  projectId: "react-38a11",
  storageBucket: "react-38a11.appspot.com",
  messagingSenderId: "70308154793",
  appId: "1:70308154793:web:42489da9004287253bc8b8",
  measurementId: "G-0C2D243SSY"
};

// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}


export default firebase;