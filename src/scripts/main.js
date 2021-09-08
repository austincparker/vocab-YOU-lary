// USE WITH FIREBASE AUTH
import checkLoginStatus from './helpers/auth';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

const init = () => {
  console.warn('YOU ARE UP AND RUNNING!');
  checkLoginStatus();
};

init();
