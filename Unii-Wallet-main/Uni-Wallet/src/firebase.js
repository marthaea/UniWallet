import { initializeApp } from "firebase/app";


import { getAnalytics } from "firebase/analytics";





import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwoA6PBvNIJUEhtim_hyTWB-PMn65paVY",
  authDomain: "unii-wallet.firebaseapp.com",
  projectId: "unii-wallet",
  storageBucket: "unii-wallet.firebasestorage.app",
  messagingSenderId: "986713616215",
  appId: "1:986713616215:web:f1bcbd95c29a0bd9d45812",
  measurementId: "G-3LQHZGBB4M"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };


;
const analytics = getAnalytics(app);














// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// Initialize Firebase
