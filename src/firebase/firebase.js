// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDA8Ox9o_oLhc8vJjyOFwmTKE2bAojaPWE",
  authDomain: "fitnessauth-1e473.firebaseapp.com",
  projectId: "fitnessauth-1e473",
  storageBucket: "fitnessauth-1e473.appspot.com",
  messagingSenderId: "690534803435",
  appId: "1:690534803435:web:fc9806d6a42b849b961bae",
};

const app = initializeApp(firebaseConfig);
export let auth = getAuth();
