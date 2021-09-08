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

// GET SINGLE VOCAB

// CREATE VOCAB

// UPDATE VOCAB

export default getVocab;
