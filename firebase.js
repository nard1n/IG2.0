// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_vm9g0gcDKkDaJP4A7wAyFMcxK3PIuKM",
  authDomain: "insta-2-papa.firebaseapp.com",
  projectId: "insta-2-papa",
  storageBucket: "insta-2-papa.appspot.com",
  messagingSenderId: "456598910197",
  appId: "1:456598910197:web:6393d5ac8d0a71923581bc"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };