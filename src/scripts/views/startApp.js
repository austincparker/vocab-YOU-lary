import domBuilder from '../events/domBuilder';

const startApp = () => {
  domBuilder();
  const domString = `<h1>TEST</h1>
    `;

  document
    .querySelector('#vocab').innerHTML = domString;
};

export default startApp;
