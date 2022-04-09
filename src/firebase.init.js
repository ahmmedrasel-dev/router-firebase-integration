
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDjWXFzwcRdt6Gw7J-027uxEUD-nr62SYg",
  authDomain: "router-firebase-integraion.firebaseapp.com",
  projectId: "router-firebase-integraion",
  storageBucket: "router-firebase-integraion.appspot.com",
  messagingSenderId: "817601931790",
  appId: "1:817601931790:web:910f4792b823bc2deaaa5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;