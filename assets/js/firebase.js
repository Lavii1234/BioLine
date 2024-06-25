<<<<<<< HEAD
// Import the functions you need from the SDKs you need
=======

>>>>>>> 073625eac38cf018cc740a688cf34fe92437ff63
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
<<<<<<< HEAD
  apiKey: "AIzaSyDXvtN8WsgDjxcOsn5rG9hrHBjLyNpbjDk",
  authDomain: "tcclala-5e314.firebaseapp.com",
  projectId: "tcclala-5e314",
  storageBucket: "tcclala-5e314.appspot.com",
  messagingSenderId: "133375461156",
  appId: "1:133375461156:web:26919ea6d6659a084095b1",
  measurementId: "G-G13Q0GFMJE"
=======
  apiKey: "AIzaSyDiIVLic_s18atZtBaJmTSNDVjqO_7u1FU",
  authDomain: "turmaterca-d2878.firebaseapp.com",
  databaseURL: "https://turmaterca-d2878-default-rtdb.firebaseio.com",
  projectId: "turmaterca-d2878",
  storageBucket: "turmaterca-d2878.appspot.com",
  messagingSenderId: "179178679657",
  appId: "1:179178679657:web:ad5cb958aec320facc21f8",
  measurementId: "G-492TNV85B3"
>>>>>>> 073625eac38cf018cc740a688cf34fe92437ff63
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {app, auth}