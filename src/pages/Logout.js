import React from 'react';
//import {Redirect} from 'react-router-dom';
import { Navigate } from 'react-router-dom';

//FIREBASE
//import firebase from 'firebase/app';
import firebase from 'firebase/compat/app';
require('firebase/compat/auth');

function Logout(){
  const auth = firebase.auth();
  auth.signOut();
  return <Navigate to='/login' />
}

export default Logout;