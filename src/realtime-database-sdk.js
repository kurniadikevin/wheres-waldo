// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD38f8Fb8-9fA7YomsZGsyOfp9lGsGRkDw",
  authDomain: "wheres-waldo-7b0b2.firebaseapp.com",
  databaseURL: "https://wheres-waldo-7b0b2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "wheres-waldo-7b0b2",
  storageBucket: "wheres-waldo-7b0b2.appspot.com",
  messagingSenderId: "296912988310",
  appId: "1:296912988310:web:199022e69cab8eaa22fab7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
