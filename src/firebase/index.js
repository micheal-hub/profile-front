// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDxzOyXfJEv1nOiCUHmVe1Lb53d20mfp2I',
  authDomain: 'micheal-portfolio-elasal.firebaseapp.com',
  projectId: 'micheal-portfolio-elasal',
  storageBucket: 'micheal-portfolio-elasal.firebasestorage.app',
  messagingSenderId: '231968697451',
  appId: '1:231968697451:web:32b1c6c9c608dc42ef952e',
  measurementId: 'G-55WJH5XHCM',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const auth = getAuth(app)
const db = getFirestore(app)

export { app, auth, db, analytics }
