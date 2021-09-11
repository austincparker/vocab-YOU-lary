import addVocabForm from '../components/forms/addVocabForm';
import langBtns from '../components/languages';
import { showVocab } from '../components/vocab';
import { getVocab } from '../helpers/data/vocabData';

const navEvents = () => {
  document.querySelector('#add-vocab-btn').addEventListener('click', () => {
    addVocabForm();
  });
  document.querySelector('#home').addEventListener('click', () => {
    document.querySelector('#lang-container').innerHTML = '';
    getVocab().then((vocab) => showVocab(vocab));
  });
  document.querySelector('#filter-btn').addEventListener('click', () => {
    langBtns();
    getVocab().then((vocab) => showVocab(vocab));
  });
};

export default navEvents;
