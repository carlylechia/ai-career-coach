// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDACqaMXSnD3U7IXPU7n9Sjftohy1fAqVk",
  authDomain: "ai-career-coach-f620c.firebaseapp.com",
  projectId: "ai-career-coach-f620c",
  storageBucket: "ai-career-coach-f620c.firebasestorage.app",
  messagingSenderId: "330911259080",
  appId: "1:330911259080:web:13bf81944745fbb8ba88fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;