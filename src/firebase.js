// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCSG91OsInQ3JkhMnB7fTdHqRuqHHn3wlY',
  authDomain: 'react-hooks-blog-9e2d7.firebaseapp.com',
  projectId: 'react-hooks-blog-9e2d7',
  storageBucket: 'react-hooks-blog-9e2d7.appspot.com',
  messagingSenderId: '854435726386',
  appId: '1:854435726386:web:69a291d5c60cd497f7e82b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
