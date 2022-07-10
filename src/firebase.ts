import { initializeApp } from "firebase/app";

const apiKey: string = process.env.REACT_APP_FIREBASE_API_KEY || "";
const authDomain: string = process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "";
const projectId: string = process.env.REACT_APP_FIREBASE_PROJECT_ID || "";
const storageBucket: string =
  process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "";
const messagingSenderId: string =
  process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "";
const appId: string = process.env.REACT_APP_FIREBASE_APP_ID || "";

const firebaseConfig: {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
} = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
};

const app = initializeApp(firebaseConfig);
