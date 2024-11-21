// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRtT8DOlESBBYh0NRYFBpj6Bd38g-1s4E",
  authDomain: "react-dragon-news-auth-cc4e3.firebaseapp.com",
  projectId: "react-dragon-news-auth-cc4e3",
  storageBucket: "react-dragon-news-auth-cc4e3.firebasestorage.app",
  messagingSenderId: "871306926880",
  appId: "1:871306926880:web:a43849f90dfe805e359545"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth