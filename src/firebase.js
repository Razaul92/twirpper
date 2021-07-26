import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQjDgF_FO_e0rFj77poT5S_HKAiRLBalM",
  authDomain: "twirp-bc3e2.firebaseapp.com",
  databaseURL: "https://twirp-bc3e2-default-rtdb.firebaseio.com",
  projectId: "twirp-bc3e2",
  storageBucket: "twirp-bc3e2.appspot.com",
  messagingSenderId: "142178730688",
  appId: "1:142178730688:web:227e552ac00f365586a325",
  measurementId: "G-KDDLYTNFSY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
