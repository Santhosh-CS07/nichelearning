// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyATrQrEsiYxKniQBCoSD-J-7CvLHl5e8hI",
    authDomain: "niche-94e5a.firebaseapp.com",
    databaseURL: "https://niche-94e5a-default-rtdb.firebaseio.com",
    projectId: "niche-94e5a",
    storageBucket: "niche-94e5a.appspot.com",
    messagingSenderId: "430583739732",
    appId: "1:430583739732:web:e81b449765e23f593784c1",
    measurementId: "G-D94QQZZT9K"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
