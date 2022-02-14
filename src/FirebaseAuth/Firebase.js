import {useEffect, useState} from 'react';
import { initializeApp } from 'firebase/app'
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC4sWEffrvsfGxQgtLD3zp0_Zj0DQyl0Jk",
  authDomain: "course-cloud-react.firebaseapp.com",
  projectId: "course-cloud-react",
  storageBucket: "course-cloud-react.appspot.com",
  messagingSenderId: "588688052049",
  appId: "1:588688052049:web:21c91247f5112ed8210d70"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth()

export function signUp(email, password){
  createUserWithEmailAndPassword(auth, email, password)
}

export function login(email, password){
  return signInWithEmailAndPassword(auth, email, password)
}

export function logout(){
  signOut(auth)
}

export function useAuth(){
  const [currentUser, setCurrentUser] = useState();


  useEffect(() => {
     const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
     return unsub
  },[])
  return currentUser
}