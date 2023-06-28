import React, { useRef, useState } from 'react';
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'


import './App.css';


import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'; 
import Chat from './components/Chat';

firebase.initializeApp({
  apiKey: "AIzaSyBHgm32C3AEXbOkkVbNKouAlYsIUcfR8V4",
  authDomain: "mychat-cd79f.firebaseapp.com",
  projectId: "mychat-cd79f",
  storageBucket: "mychat-cd79f.appspot.com",
  messagingSenderId: "761341699990",
  appId: "1:761341699990:web:d9ab23f9d90379ae291fb7",
  measurementId: "G-PHHW1ER3D2"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  
const [user] = useAuthState(auth)


  return (
    <div className='App'>
      <header>
        <SignOut />
      </header>
  {user ? <Chat firebase={firebase} firestore={firestore} auth={auth}/> : <SignIn />}
    </div>
  );
}

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
     
    </>
  )

}

function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}




export default App;
