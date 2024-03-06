import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyABpEPMj9NAhS8kC_T9nt17XIEo8h5lXm4",
	authDomain: "e-library-app-b5060.firebaseapp.com",
	projectId: "e-library-app-b5060",
	storageBucket: "e-library-app-b5060.appspot.com",
	messagingSenderId: "889258955935",
	appId: "1:889258955935:web:967c06aca34cec0a037eaa"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
