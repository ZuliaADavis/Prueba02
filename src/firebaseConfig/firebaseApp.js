// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBolGHMsTQnHhJNFanx3OnXIRP6WMyY_u4",
  authDomain: "nosvamos-01.firebaseapp.com",
  projectId: "nosvamos-01",
  storageBucket: "nosvamos-01.appspot.com",
  messagingSenderId: "1083700737491",
  appId: "1:1083700737491:web:22aa4fa04ea60c0775eb26",
  measurementId: "G-7GEVVWREEW"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(firebaseApp);

export default firebaseApp;