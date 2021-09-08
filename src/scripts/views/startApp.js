import { showVocab } from '../components/vocab';
import domBuilder from '../events/domBuilder';
import getVocab from '../helpers/data/vocabData';

const startApp = () => {
  domBuilder();
  const domString = `<h1>TEST</h1>
    `;

  document
    .querySelector('#languages').innerHTML = domString;
  getVocab().then((vocab) => showVocab(vocab));
};

export default startApp;
