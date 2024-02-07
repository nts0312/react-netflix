// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOTVDWTmM3ARW8helSYQID22aIMDEqhKg",
  authDomain: "netflix-gpt-6c3b1.firebaseapp.com",
  projectId: "netflix-gpt-6c3b1",
  storageBucket: "netflix-gpt-6c3b1.appspot.com",
  messagingSenderId: "1018592569233",
  appId: "1:1018592569233:web:6067a2772a118b32f61c30",
  measurementId: "G-V60CDW831S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
