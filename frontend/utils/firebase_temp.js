import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "loginonecart-2185f.firebaseapp.com",
  projectId: "loginonecart-2185f",
  storageBucket: "loginonecart-2185f.firebasestorage.app",
  messagingSenderId: "324464694255",
  appId: "1:324464694255:web:2289410a42171d380f1c1a",
  measurementId: "G-LZ41P57QZ3"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();
export {auth,provider}