// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwpELLy0au96-hK-Zray2OP4NYraxR91U",
  authDomain: "chatgpt-messenger-b164d.firebaseapp.com",
  projectId: "chatgpt-messenger-b164d",
  storageBucket: "chatgpt-messenger-b164d.appspot.com",
  messagingSenderId: "422450751023",
  appId: "1:422450751023:web:3f6a61ba92b054316a48da",
};

// Initialize Firebase
//below is a singleton pattern in coding- meaning we only want a single instance
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
