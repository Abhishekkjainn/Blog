import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD-ceBtuAftJePfn-jPoKs4OPhj4N6APBQ',
  authDomain: 'personal-blog-1904.firebaseapp.com',
  projectId: 'personal-blog-1904',
  storageBucket: 'personal-blog-1904.appspot.com',
  messagingSenderId: '52592565193',
  appId: '1:52592565193:web:87c91bf025d0b6c54ca618',
  measurementId: 'G-1L24SM897S',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
