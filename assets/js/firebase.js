// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDXvtN8WsgDjxcOsn5rG9hrHBjLyNpbjDk",
  authDomain: "tcclala-5e314.firebaseapp.com",
  projectId: "tcclala-5e314",
  storageBucket: "tcclala-5e314.appspot.com",
  messagingSenderId: "133375461156",
  appId: "1:133375461156:web:26919ea6d6659a084095b1",
  measurementId: "G-G13Q0GFMJE"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {app, auth}