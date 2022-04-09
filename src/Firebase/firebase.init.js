// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyADfev8B8v3Oxk9N2nX4UGwi-qoteGy2tk",
    authDomain: "ema-jhon-resource2.firebaseapp.com",
    projectId: "ema-jhon-resource2",
    storageBucket: "ema-jhon-resource2.appspot.com",
    messagingSenderId: "406441760715",
    appId: "1:406441760715:web:00266d8da5c9c6ccaa484e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;