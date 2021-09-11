import signIn from '../helpers/signIn';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = `<h1 class="m-3">Welcome to vocab-YOU-lary!!</h1>
  <p>Click here to begin:</p>
  <button id="google-auth" class="btn btn-danger">LOGIN</button>`;
  document.querySelector('#login-container').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
