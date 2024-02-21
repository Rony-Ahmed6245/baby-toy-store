// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4fvDd_1OLR4ns2-bfQecg_qPYgt4IkIs",
  authDomain: "baby-toy-store-8b94f.firebaseapp.com",
  projectId: "baby-toy-store-8b94f",
  storageBucket: "baby-toy-store-8b94f.appspot.com",
  messagingSenderId: "406825862627",
  appId: "1:406825862627:web:0096665259750c96c10cd6",
  measurementId: "G-PBF3Z7KCB2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app