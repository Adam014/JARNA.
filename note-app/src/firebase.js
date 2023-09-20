import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAO1J7G4rzqSmS6RUV6rRP9y4M22S3qt0Q",
  authDomain: "note-app-78cb8.firebaseapp.com",
  projectId: "note-app-78cb8",
  storageBucket: "note-app-78cb8.appspot.com",
  messagingSenderId: "245950044642",
  appId: "1:245950044642:web:d33228a35fdc1bce25c1bb"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const postColletion = collection(db, "notes");