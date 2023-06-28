import React from 'react'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

function SignIn({SignInWithGoogle}) {


  return (
    <button onClick={SignInWithGoogle}>Sign In With Google </button>
  )
}

export default SignIn