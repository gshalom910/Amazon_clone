import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANcBd5efx4GyNnqwiIFy7E-PV5rymmVUs",
  authDomain: "clone-b2e26.firebaseapp.com",
  projectId: "clone-b2e26",
  storageBucket: "clone-b2e26.appspot.com",
  messagingSenderId: "579143093794",
  appId: "1:579143093794:web:4cffe492f681e4a205c47b",
  measurementId: "G-4MSCZ24CEH",
};
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
export { auth, db };
