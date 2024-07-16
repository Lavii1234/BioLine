
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js"
import { getStorage} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-storage.js"

const firebaseConfig = {
  apiKey: "AIzaSyDXvtN8WsgDjxcOsn5rG9hrHBjLyNpbjDk",
  authDomain: "tcclala-5e314.firebaseapp.com",
  databaseURL: "https://tcclala-5e314-default-rtdb.firebaseio.com",
  projectId: "tcclala-5e314",
  storageBucket: "tcclala-5e314.appspot.com",
  messagingSenderId: "133375461156",
  appId: "1:133375461156:web:26919ea6d6659a084095b1",
  measurementId: "G-G13Q0GFMJE"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const database = getDatabase(app)
const storage = getStorage(app)
export {app, auth, database, storage}