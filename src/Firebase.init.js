// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9ffT00GDUbNfj71ft3vZRcbYuCxqWmUc",
  authDomain: "doctors-portal-c46ac.firebaseapp.com",
  projectId: "doctors-portal-c46ac",
  storageBucket: "doctors-portal-c46ac.appspot.com",
  messagingSenderId: "237609926639",
  appId: "1:237609926639:web:da340c333114d36ced801a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;