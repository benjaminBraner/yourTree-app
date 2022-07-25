import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// configuracion de la web app de firebase
const firebaseConfig = {
  apiKey: "AIzaSyDL3AhkBLVmYgC8fp_mOzYalFSw2joDlXQ",
  authDomain: "yourtree-7c646.firebaseapp.com",
  projectId: "yourtree-7c646",
  storageBucket: "yourtree-7c646.appspot.com",
  messagingSenderId: "384932345859",
  appId: "1:384932345859:web:5292338ab9d9a07fe8f636"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//esto seria como mi base de datos
const db = firebase.firestore();

//esto es para que yo pueda hacer la autenticacion de mi aplicacion con google
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {db, googleAuthProvider, firebase}