// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAthdseNYfEH3b-tdcPIqJrhN3xiZ5jOCY",
  authDomain: "netflixgpt-6a12f.firebaseapp.com",
  projectId: "netflixgpt-6a12f",
  storageBucket: "netflixgpt-6a12f.appspot.com",
  messagingSenderId: "189958898271",
  appId: "1:189958898271:web:28ecc6e20218839741d1ea",
  measurementId: "G-2GKBW8QK11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);