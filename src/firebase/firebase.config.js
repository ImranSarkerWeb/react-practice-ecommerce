// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2d8Oneu93CiNxqDDsxRPHF8aoqJuVxes",
  authDomain: "practice-ecommerce-firebase.firebaseapp.com",
  projectId: "practice-ecommerce-firebase",
  storageBucket: "practice-ecommerce-firebase.appspot.com",
  messagingSenderId: "230377245045",
  appId: "1:230377245045:web:5e701359cc5a92028eeb3c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
