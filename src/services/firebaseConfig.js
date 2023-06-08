import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "tienda-mundodigital.firebaseapp.com",
  projectId: "tienda-mundodigital",
  storageBucket: "tienda-mundodigital.appspot.com",
  messagingSenderId: "648536892213",
  appId: "1:648536892213:web:9b22b6c42be1ee2d8d227c"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);