import addVocabForm from '../components/forms/addVocabForm';

const navEvents = () => {
  document.querySelector('#add-vocab-btn').addEventListener('click', () => {
    addVocabForm();
  });
};

export default navEvents;
