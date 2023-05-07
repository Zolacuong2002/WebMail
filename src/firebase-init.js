import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAe-Mn3OrzUaQuLUgiZ1nUwghFfdrtXvfw",
  authDomain: "mailweb-71d09.firebaseapp.com",
  projectId: "mailweb-71d09",
  storageBucket: "mailweb-71d09.appspot.com",
  messagingSenderId: "709918374673",
  appId: "1:709918374673:web:e918f620e83622ab752ab0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }


