import React from 'react';
//import {Redirect} from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import {useAuthState} from 'react-firebase-hooks/auth';
import TwitterIcon from '../assets/icon/twitter.svg';

//CSS
import '../assets/scss/custom.scss';

//FIREBASE
//import firebase from 'firebase/app';
import firebase from 'firebase/compat/app';
require('firebase/compat/auth');

//function Login({firebase}){
function Login(){
  
   let auth = firebase.auth();
   let [user] = useAuthState(auth);

  // REDIRECT
  if(user){
    return <Navigate to='/' />
  }

  const signInWithGoogle = () =>{
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  
  return (
    <div className="container login p-4">
      <div className="row">
        <div className="col-3">
          <img src={TwitterIcon} alt="Icon"/>
        </div>
        <div className="col-9"></div>
      </div>
      <br/>
      <div className="row login-content text-white">
        <div className="col-12">
          <h5 className="fw-bold">Login to Twitter</h5>
        </div>
        <div className="col-12 my-4">
          <p>Hey there, I'm a Twitter Like App.</p>
        </div>
        <div className="col-12">
          <button onClick={signInWithGoogle} className="btn btn-primary col-12 py-2 text-white">
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;