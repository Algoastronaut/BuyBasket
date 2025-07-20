import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAVA55_WbwGbI9Smod_n36nsjFg8dE970E",
  authDomain: "buybasket-f089d.firebaseapp.com",
  projectId: "buybasket-f089d",
  storageBucket: "buybasket-f089d.appspot.com", // fixed typo
  messagingSenderId: "536014825822",
  appId: "1:536014825822:web:bc59a2e7407235932f07cf",
  measurementId: "G-0JKS5BYXF0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

