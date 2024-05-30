// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBokr5PNvGnvW_7-UGa7HEBM2XafJrdYmE",
authDomain: "kitty-party-app.firebaseapp.com",
  projectId: "kitty-party-app",
storageBucket: "kitty-party-app.appspot.com",
  messagingSenderId: "2899560803",
  appId: "1:2899560803:web:662b857092f6f6316d2b56",
  measurementId: "G-7K9E46QTDZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
