// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAa89eNvpb7vUxU9snu_bCOutgRlwUHFLY",
  authDomain: "toytopia-client.firebaseapp.com",
  projectId: "toytopia-client",
  storageBucket: "toytopia-client.appspot.com",
  messagingSenderId: "499390528935",
  appId: "1:499390528935:web:c0b8334c65e78b4abd4a82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;