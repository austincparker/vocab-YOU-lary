import addVocabForm from '../components/forms/addVocabForm';
import langBtns from '../components/languages';
import showSorting from '../components/sortVocab';
import { showVocab } from '../components/vocab';
import { getOldVocab } from '../helpers/data/vocabData';

const navEvents = () => {
  document.querySelector('#add-vocab-btn').addEventListener('click', () => {
    addVocabForm();
  });
  document.querySelector('#home').addEventListener('click', () => {
    document.querySelector('#lang-container').innerHTML = '';
    showSorting();
    getOldVocab().then((vocabArray) => showVocab(vocabArray.reverse()));
  });
  document.querySelector('#filter-btn').addEventListener('click', () => {
    langBtns();
    getOldVocab().then((vocabArray) => showVocab(vocabArray.reverse()));
  });
};

export default navEvents;
