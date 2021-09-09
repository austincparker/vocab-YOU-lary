import { showVocab } from '../components/vocab';
import { createVocab } from '../helpers/data/vocabData';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CREATE ENTRY
    if (e.target.id.includes('submit-vocab')) {
      e.preventDefault();
      const vocabObj = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        tech: document.querySelector('#languages').value
      };
      createVocab(vocabObj).then((vocabArray) => showVocab(vocabArray));
    }
  });
};

export default domEvents;
