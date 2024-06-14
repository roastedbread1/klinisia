// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBK-ZebRRl5Q2008Tl5R2_G8rOEgH8-IVs",
  authDomain: "klinisia-25a09.firebaseapp.com",
  projectId: "klinisia-25a09",
  storageBucket: "klinisia-25a09.appspot.com",
  messagingSenderId: "10703346523",
  appId: "1:10703346523:web:a2cc9e7bc78cc60cda987e",
  measurementId: "G-GX4JMGTM6Z",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
