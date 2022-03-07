// Import the functions you need from the SDKs you need
// import firebase from 'firebase'
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getDatabase } from "firebase/database"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3RHrBHHkmtcYymMK2TBHodXmTdj2Jz4w",
  authDomain: "linkedin-clone-2625a.firebaseapp.com",
  projectId: "linkedin-clone-2625a",
  storageBucket: "linkedin-clone-2625a.appspot.com",
  messagingSenderId: "780770402791",
  appId: "1:780770402791:web:6a3e122b07efb0c42add42"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore();
export const database = getDatabase(firebaseApp);




