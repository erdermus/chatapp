import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYbbSgLQ1prWcmdlIIC9FD732QgV05qpU",
  authDomain: "chatapp-e2e1b.firebaseapp.com",
  projectId: "chatapp-e2e1b",
  storageBucket: "chatapp-e2e1b.appspot.com",
  messagingSenderId: "28937414499",
  appId: "1:28937414499:web:95146c1df4d4f352605556"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = initializeFirestore(app, {experimentalForceLongPolling: true,});

export function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
};

export function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
};