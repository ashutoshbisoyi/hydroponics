// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDlGpMkuGpBzsBL8dO0CsD7XV9rYYBgs9Y',
  authDomain: 'hydroponics-farming.firebaseapp.com',
  projectId: 'hydroponics-farming',
  storageBucket: 'hydroponics-farming.appspot.com',
  messagingSenderId: '130432023170',
  appId: '1:130432023170:web:910d45540a047f0397d29b',
  measurementId: 'G-G7FZGHNLDX',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
