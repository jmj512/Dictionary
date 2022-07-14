// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrC3dXMMPA7SMSZ5GPHbSBo_ZKYI95dUU",
  authDomain: "sparta-react-basic-d6c7c.firebaseapp.com",
  projectId: "sparta-react-basic-d6c7c",
  storageBucket: "sparta-react-basic-d6c7c.appspot.com",
  messagingSenderId: "509399108909",
  appId: "1:509399108909:web:5a778e9b07fe15bd5597a4",
  measurementId: "G-VGD0Y9MC1H"
};

initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const db = getFirestore();