// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDK3ieWMrGr4VR0qJXYJo8nIkczBHzLjVY",
  authDomain: "cookie-clicker-1a3f3.firebaseapp.com",
  databaseURL: "https://cookie-clicker-1a3f3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cookie-clicker-1a3f3",
  storageBucket: "cookie-clicker-1a3f3.appspot.com",
  messagingSenderId: "459688095288",
  appId: "1:459688095288:web:adc495e30dfd730fa540cd",
  measurementId: "G-Y0415FHJLP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase();
