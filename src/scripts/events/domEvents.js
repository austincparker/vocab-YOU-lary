/* eslint-disable no-alert */
import { showVocab } from '../components/vocab';
import { createVocab, deleteVocab } from '../helpers/data/vocabData';

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
    // DELETE VOCAB
    if (e.target.id.includes('delete-vocab-btn')) {
      if (window.confirm('Want to delete?')) {
        const [, id] = e.target.id.split('--');
        deleteVocab(id).then(showVocab);
      }
    }
    // EDIT VOCAB
    if (e.target.id.includes('edit-vocab-btn')) {
      console.warn('you clicked edit');
    }
    // UPDATE VOCAB
    if (e.target.id.includes('update-vocab-btn')) {
      // e.preventDefault();
      // const [, firebaseKey] = e.target.id.split('--');
      // const vocabObj = {
      //   title: document.querySelector('#title').value,
      //   description: document.querySelector('#description').value,
      //   tech: document.querySelector('#languages').value,
      //   firebaseKey
      // };
      // console.warn(vocabObj);
      // updateVocab(vocabObj).then(showVocab);
    }
  });
};

export default domEvents;
