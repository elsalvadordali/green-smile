
import { initializeApp } from "firebase/app";
<<<<<<< HEAD
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
=======
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
>>>>>>> ac27ae28b60dbc516d545bd57db4d09af6f3f73d


//ERASE BEFORE DEPLOY
const firebaseConfig = {
    apiKey: "AIzaSyD9rmqHWcKCvKk5OUppb94R8AeEsBn_Smk",
    authDomain: "green-smile-5bee9.firebaseapp.com",
    projectId: "green-smile-5bee9",
    storageBucket: "green-smile-5bee9.appspot.com",
    messagingSenderId: "998688888679",
    appId: "1:998688888679:web:8bac6d09e5bade1a5301c2"
<<<<<<< HEAD
};
=======
  };
>>>>>>> ac27ae28b60dbc516d545bd57db4d09af6f3f73d

const app = initializeApp(firebaseConfig)
const auth = getAuth(app);


export async function loginUser(email, password) {
      let user = await signInWithEmailAndPassword(auth, email, password)
      return user
}

<<<<<<< HEAD
function register(email, password) {
 //Elise 

=======
export async function register(email, password) {
      let user = await createUserWithEmailAndPassword(auth, email, password)
      return user
>>>>>>> ac27ae28b60dbc516d545bd57db4d09af6f3f73d
}