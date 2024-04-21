// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNfC2BWzt7g-0jgVKEwAE4-wvldjwfyqQ",
  authDomain: "netflix-gpt-b784f.firebaseapp.com",
  projectId: "netflix-gpt-b784f",
  storageBucket: "netflix-gpt-b784f.appspot.com",
  messagingSenderId: "253259476998",
  appId: "1:253259476998:web:b69827a70bf96fe2489387",
  measurementId: "G-VLR8YEDMHX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();