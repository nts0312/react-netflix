// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6FnOVHAW1SYYzHdjSD2RtBjxaNhYoef8",
  authDomain: "netflix-gpt-be47f.firebaseapp.com",
  projectId: "netflix-gpt-be47f",
  storageBucket: "netflix-gpt-be47f.appspot.com",
  messagingSenderId: "218885272750",
  appId: "1:218885272750:web:fd8be8919edc9c1daa693f",
  measurementId: "G-15469X5HEE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();