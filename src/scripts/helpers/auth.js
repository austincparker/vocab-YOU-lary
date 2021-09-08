import firebase from 'firebase/app';
import 'firebase/auth';
import loginButton from '../components/loginButton';
import firebaseConfig from '../../api/apiKeys';
import startApp from '../views/startApp';
import logoutButton from '../components/logoutButton';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in do something...
      startApp();
      logoutButton();
    } else {
      // person is NOT logged in
      loginButton();
    }
  });
};

export default checkLoginStatus;
