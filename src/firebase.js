// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDH4UEuZCUapLr_6eq6MXY9wFhRE7vMSaw",
  authDomain: "namaskaram-react.firebaseapp.com",
  projectId: "namaskaram-react",
  storageBucket: "namaskaram-react.appspot.com",
  messagingSenderId: "808630578046",
  appId: "1:808630578046:web:9491a8ad3d2a68cdc6e12f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the auth variable
export const auth = getAuth(app);