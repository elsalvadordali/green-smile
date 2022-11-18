
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getFirestore } from 'firebase/firestore';

//ERASE BEFORE DEPLOY
const firebaseConfig = {
      apiKey: "AIzaSyD9rmqHWcKCvKk5OUppb94R8AeEsBn_Smk",
      authDomain: "green-smile-5bee9.firebaseapp.com",
      projectId: "green-smile-5bee9",
      storageBucket: "green-smile-5bee9.appspot.com",
      messagingSenderId: "998688888679",
      appId: "1:998688888679:web:8bac6d09e5bade1a5301c2"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export async function loginUser(email, password) {
      try {
            let user = await signInWithEmailAndPassword(auth, email, password);
            return user;
      }
      catch (err) {
            return err;
            //err.code:
            //auth/invalid-email
            //auth/user-not-found
      }
}

export async function register(email, password) {
      try {
            let user = await createUserWithEmailAndPassword(auth, email, password);
            return user;
      }
      catch (err) {
            // console.log("ERROR IN REGISTER", err.code);
            return err;
      }
}

export async function writeToFireStore(entry, userId) {
      const reference = doc(db, 'table', userId);
      await updateDoc(reference, entry);
}