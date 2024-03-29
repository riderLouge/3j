import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyButyD0gblLITLu-vy2upwRARc7bNBqLWk",
  authDomain: "j-auto-expert-llp.firebaseapp.com",
  projectId: "j-auto-expert-llp",
  storageBucket: "j-auto-expert-llp.appspot.com",
  messagingSenderId: "618698689515",
  appId: "1:618698689515:web:2683f18fb8a87b29a327ae",
  measurementId: "G-6SC0HK0DK9",
};

const app = initializeApp(firebaseConfig);
const fireStoreAccess = getFirestore(app);
const fireStorageAccess = getStorage(app);

export { fireStoreAccess, fireStorageAccess };

