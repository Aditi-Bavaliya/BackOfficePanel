import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"; // Uncomment this line if you need Firestore
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD1kTtpN-vAwkkMBTaCejxQOqAafM-EQuw",
  authDomain: "todolist-25.firebaseapp.com",
  databaseURL: "https://todolist-25-default-rtdb.firebaseio.com",
  projectId: "todolist-25",
  storageBucket: "todolist-25.appspot.com",
  messagingSenderId: "431034328595",
  appId: "1:431034328595:web:9b16c6fda1fc35458d01e6"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { app, db}; // Corrected export statement
