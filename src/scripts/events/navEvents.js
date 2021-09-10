import addVocabForm from '../components/forms/addVocabForm';
import { showVocab } from '../components/vocab';
import { getVocab } from '../helpers/data/vocabData';

const navEvents = () => {
  document.querySelector('#add-vocab-btn').addEventListener('click', () => {
    addVocabForm();
  });
  document.querySelector('#home').addEventListener('click', () => {
    getVocab().then((vocab) => showVocab(vocab));
  });
};

export default navEvents;
