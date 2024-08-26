// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfUrTHwVyOffgCoxKRBhEVAami5CY2wU4",
  authDomain: "oxford-a11.firebaseapp.com",
  projectId: "oxford-a11",
  storageBucket: "oxford-a11.appspot.com",
  messagingSenderId: "492394231383",
  appId: "1:492394231383:web:8ee50ade0841c074e65512"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;