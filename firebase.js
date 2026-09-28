// firebase.js — shared Firebase configuration for GyanSwap
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBq-BrrT0N4lszLMHowVkk12jit96t7sis",
  authDomain: "gyan-swap.firebaseapp.com",
  projectId: "gyan-swap",
  storageBucket: "gyan-swap.firebasestorage.app",
  messagingSenderId: "111231263033",
  appId: "1:111231263033:web:05d8e6166a06c57d57c8e8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
