import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAJogfVIkQ_zt0KNjLADiMuEcHza_6SXF0",
  authDomain: "crown-db-cc7c2.firebaseapp.com",
  databaseURL: "https://crown-db-cc7c2.firebaseio.com",
  projectId: "crown-db-cc7c2",
  storageBucket: "crown-db-cc7c2.appspot.com",
  messagingSenderId: "390994204331",
  appId: "1:390994204331:web:bd62907fe1d00ff1c949ee",
  measurementId: "G-68Q4HNYNYB",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
