// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOV37me6RLG-D1oK9OwMsKMln5tS-mvd8",
  authDomain: "hassan-accountant.firebaseapp.com",
  projectId: "hassan-accountant",
  storageBucket: "hassan-accountant.appspot.com",
  messagingSenderId: "988656103277",
  appId: "1:988656103277:web:1475c882ae25ee4562b464"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth