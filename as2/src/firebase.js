import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBU5IfhfWDcPZNvjMUqLyuJHWDK1jjE8r8",
  authDomain: "react-38a11.firebaseapp.com",
  projectId: "react-38a11",
  storageBucket: "react-38a11.appspot.com",
  messagingSenderId: "70308154793",
  appId: "1:70308154793:web:42489da9004287253bc8b8",
  measurementId: "G-0C2D243SSY"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore (firebaseApp);

export {firestore};
export {firebaseApp};