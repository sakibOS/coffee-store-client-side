// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8QYUEKgzvqOx-zHxL9J5BqdO0mWH1k9Y",
  authDomain: "coffee-store-e73d3.firebaseapp.com",
  projectId: "coffee-store-e73d3",
  storageBucket: "coffee-store-e73d3.appspot.com",
  messagingSenderId: "1048509402928",
  appId: "1:1048509402928:web:8df8f36ec144f1fede82f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default(app);