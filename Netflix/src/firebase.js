// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjgKIotMX9HJIGvyW5oKsCsI_nadkK31A",
  authDomain: "netflix-clone-c392c.firebaseapp.com",
  projectId: "netflix-clone-c392c",
  storageBucket: "netflix-clone-c392c.appspot.com",
  messagingSenderId: "524979546586",
  appId: "1:524979546586:web:509063110216e1a934f8e3",
  measurementId: "G-W72PRBGGCG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app)
