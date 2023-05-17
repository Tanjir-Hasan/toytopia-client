// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxi-MopJqKPe5i8ge5EQDOtwAB7kvuPrE",
  authDomain: "super-hero-squadron-client.firebaseapp.com",
  projectId: "super-hero-squadron-client",
  storageBucket: "super-hero-squadron-client.appspot.com",
  messagingSenderId: "611592784629",
  appId: "1:611592784629:web:657dbae0c549e9efe413bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;