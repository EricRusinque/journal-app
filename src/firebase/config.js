import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyBljG_yzGnG6xsRQUfTMxzDPxBt1rq5eL4",
  authDomain: "journal-app-7d714.firebaseapp.com",
  projectId: "journal-app-7d714",
  storageBucket: "journal-app-7d714.appspot.com",
  messagingSenderId: "730123142803",
  appId: "1:730123142803:web:e34410836427c669faef66",
  measurementId: "G-RFM1ZXE6G6"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp )