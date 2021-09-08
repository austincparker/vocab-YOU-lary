import firebase from 'firebase/app';
import 'firebase/auth';
import startApp from '../views/startApp';

const signIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
  startApp();
};

export default signIn;
