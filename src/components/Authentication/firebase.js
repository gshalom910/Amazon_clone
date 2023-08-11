import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyEtIhNDNRvyA9w3vJ50ig5FQRtpg1eFE",
  authDomain: "clone-e7216.firebaseapp.com",
  projectId: "clone-e7216",
  storageBucket: "clone-e7216.appspot.com",
  messagingSenderId: "773276998446",
  appId: "1:773276998446:web:06951ce6e8c7c66a38b8bf",
  measurementId: "G-TW1MC5ZQ8M",
};
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
export { auth, db };
