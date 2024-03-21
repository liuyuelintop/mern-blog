// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-af7b9.firebaseapp.com",
  projectId: "mern-blog-af7b9",
  storageBucket: "mern-blog-af7b9.appspot.com",
  messagingSenderId: "192861982153",
  appId: "1:192861982153:web:3cd551b3ac1db7454dac18"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);