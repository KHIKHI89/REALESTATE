// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNOdgVKWA2qFGvSUKjLZBppnEfCnL7dXU",
  authDomain: "realestate-4cd6a.firebaseapp.com",
  projectId: "realestate-4cd6a",
  storageBucket: "realestate-4cd6a.appspot.com",
  messagingSenderId: "351446718529",
  appId: "1:351446718529:web:4227e2c95240fb8b340ec0",
  measurementId: "G-YC32MPV78P"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
 export const db = getFirestore()
