import firebase from 'firebase/compat/app'
import 'firebase/firestore'
import 'firebase/auth'

import './App.css';
import Chat from './components/Chat';
import SignIn from './components/SignIn';

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
  return (
    <>
    <SignIn />
    <Chat />
    </>
  );
}

export default App;
