import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBrABddCJrsG1LHlE8qHyQWGnHlA6svVfw',
  authDomain: 'recipesite-3b5ed.firebaseapp.com',
  projectId: 'recipesite-3b5ed',
  storageBucket: 'recipesite-3b5ed.appspot.com',
  messagingSenderId: '416958265127',
  appId: '1:416958265127:web:832c99cf982846c3a99b02',
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Init firestore
const db = getFirestore();

export { db };
