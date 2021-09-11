/* eslint-disable no-alert */
import addVocabForm from '../components/forms/addVocabForm';
import { showVocab } from '../components/vocab';
import {
  createVocab,
  deleteVocab,
  getCssVocab,
  getHtmlVocab,
  getJsVocab,
  getOldVocab,
  getReactVocab,
  getSingleVocab,
  getVocab,
  updateVocab
} from '../helpers/data/vocabData';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CREATE ENTRY
    if (e.target.id.includes('submit-vocab')) {
      e.preventDefault();
      const vocabObj = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        tech: document.querySelector('#languages').value,
        timestamp: Date.now()
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
      const [, id] = e.target.id.split('--');
      getSingleVocab(id).then((vocabObj) => addVocabForm(vocabObj));
    }
    // UPDATE VOCAB
    if (e.target.id.includes('update-vocab')) {
      e.preventDefault();
      const [, firebaseKey] = e.target.id.split('--');
      const vocabObj = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        tech: document.querySelector('#languages').value,
        firebaseKey
      };
      console.warn(vocabObj);
      updateVocab(vocabObj).then(showVocab);
    }
    // FILTER LANGUAGES
    if (e.target.id.includes('javascript-btn')) {
      e.preventDefault();
      getJsVocab().then((vocabArray) => showVocab(vocabArray));
    }
    if (e.target.id.includes('css-btn')) {
      e.preventDefault();
      getCssVocab().then((vocabArray) => showVocab(vocabArray));
    }
    if (e.target.id.includes('html-btn')) {
      e.preventDefault();
      getHtmlVocab().then((vocabArray) => showVocab(vocabArray));
    }
    if (e.target.id.includes('react-btn')) {
      e.preventDefault();
      getReactVocab().then((vocabArray) => showVocab(vocabArray));
    }
    // SORT LINKS
    if (e.target.id.includes('new-sort')) {
      e.preventDefault();
      getOldVocab().then((vocabArray) => showVocab(vocabArray.reverse()));
    }
    if (e.target.id.includes('old-sort')) {
      e.preventDefault();
      getOldVocab().then((vocabArray) => showVocab(vocabArray));
    }
    if (e.target.id.includes('alph-sort')) {
      e.preventDefault();
      getVocab().then((vocabArray) => showVocab(vocabArray.sort((a, b) => ((a.title.toUpperCase() > b.title.toUpperCase()) ? 1 : -1))));
    }
  });
};

export default domEvents;
