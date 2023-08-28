// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQmYtGtR3HK3yeDZTFEE0oYhJrG_dBNk0",
  authDomain: "nhc-clone.firebaseapp.com",
  projectId: "nhc-clone",
  storageBucket: "nhc-clone.appspot.com",
  messagingSenderId: "104901123984",
  appId: "1:104901123984:web:6ee2ff18304b9195859d15"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };