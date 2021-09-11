import navBar from '../components/navBar';
import showSorting from '../components/sortVocab';
import { showVocab } from '../components/vocab';
import domBuilder from '../events/domBuilder';
import domEvents from '../events/domEvents';
import navEvents from '../events/navEvents';
import clearDom from '../helpers/clearDom';
import { getOldVocab } from '../helpers/data/vocabData';

const startApp = () => {
  clearDom();
  domBuilder();
  navBar();
  navEvents();
  domEvents();
  showSorting();
  getOldVocab().then((vocabArray) => showVocab(vocabArray.reverse()));
};

export default startApp;
