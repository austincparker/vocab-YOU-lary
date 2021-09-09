import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';

// API CALLS FOR VOCAB

const dbUrl = firebaseConfig.databaseURL;

// GET VOCAB

const getVocab = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/vocab.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// DELETE VOCAB

const deleteVocab = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/vocab/${firebaseKey}.json`)
    .then(() => {
      getVocab().then(resolve);
    })
    .catch(reject);
});

// GET SINGLE VOCAB

// CREATE VOCAB

const createVocab = (vocabObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/vocab.json`, vocabObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };

      axios.patch(`${dbUrl}/vocab/${response.data.name}.json`, body)
        .then(() => {
          getVocab(vocabObj).then((vocabArray) => resolve(vocabArray));
        });
    }).catch((error) => reject(error));
});

// UPDATE VOCAB

export { getVocab, createVocab, deleteVocab };
