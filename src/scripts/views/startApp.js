import navBar from '../components/navBar';
import { showVocab } from '../components/vocab';
import domBuilder from '../events/domBuilder';
import navEvents from '../events/navEvents';
import clearDom from '../helpers/clearDom';
import getVocab from '../helpers/data/vocabData';

const startApp = () => {
  clearDom();
  domBuilder();
  navBar();
  navEvents();
  getVocab().then((vocab) => showVocab(vocab));
};

export default startApp;
