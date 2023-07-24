
import { initializeApp } from "firebase/app";
import{ getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDyFXhX6tuWuziZ4ezyNrW5o1nkWuDZRIU",
  authDomain: "bhangaar-b0ca3.firebaseapp.com",
  projectId: "bhangaar-b0ca3",
  storageBucket: "bhangaar-b0ca3.appspot.com",
  messagingSenderId: "492542810416",
  appId: "1:492542810416:web:2f3b68eec3a89d75ba90f5",
  measurementId: "G-WZD6WWNZC9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db =getFirestore(app)
