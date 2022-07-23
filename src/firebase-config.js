// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCWVGUYKHmd3L4mGYW3JivzTzf0d6DKwuo",
    authDomain: "newblogproject-5da3c.firebaseapp.com",
    projectId: "newblogproject-5da3c",
    storageBucket: "newblogproject-5da3c.appspot.com",
    messagingSenderId: "183597422028",
    appId: "1:183597422028:web:b167c9ec03d5363dea7969",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);