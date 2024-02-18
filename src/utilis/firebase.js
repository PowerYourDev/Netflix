//package imports
import {getAuth} from "firebase/auth"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBVhT28m5LQmKQ-dNJEYsCn0RGbGDYVKI",
  authDomain: "netflix-6142d.firebaseapp.com",
  projectId: "netflix-6142d",
  storageBucket: "netflix-6142d.appspot.com",
  messagingSenderId: "235263832884",
  appId: "1:235263832884:web:4428017b8567ce5b4aab61",
  measurementId: "G-Q2D2EP27HE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();