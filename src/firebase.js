import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,

} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDhxee6f8rmC3RYpMiwNI5ig0lgTDySIrQ",
  authDomain: "shortener-af7eb.firebaseapp.com",
  databaseURL: "https://shortener-af7eb-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "shortener-af7eb",
  storageBucket: "shortener-af7eb.appspot.com",
  messagingSenderId: "444426757478",
  appId: "1:444426757478:web:2f3c55f0c0ef0b2b76d4a7",
  measurementId: "G-BJWD6Y1KEJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore()

// collection ref
export const colRef = collection(db, 'short')