// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9Gt3xPByLBx7gr80cslRy1yhgs_Ub73o",
  authDomain: "lib-click-funes.firebaseapp.com",
  projectId: "lib-click-funes",
  storageBucket: "lib-click-funes.appspot.com",
  messagingSenderId: "478011016803",
  appId: "1:478011016803:web:406305a9903a29dee85a56",
  measurementId: "G-83535C1VCV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db