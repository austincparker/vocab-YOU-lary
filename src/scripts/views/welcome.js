const welcomeMessage = () => {
  const domString = '<h1>Welcome to vocab-YOU-lary!</h1>';

  document.querySelector('#vocab').innerHTML = domString;
};

export default welcomeMessage;
