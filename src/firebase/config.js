import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDSv8eSndjCrytaQiBnkFibBt_cIvotn3U",
  authDomain: "react-firebase-ba121.firebaseapp.com",
  projectId: "react-firebase-ba121",
  storageBucket: "react-firebase-ba121.appspot.com",
  messagingSenderId: "343473515845",
  appId: "1:343473515845:web:92f37ba94348a1a55f622c"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );
