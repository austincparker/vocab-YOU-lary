import clearDom from '../helpers/clearDom';

const showVocab = (array) => {
  clearDom();
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#vocab').innerHTML = '';
  array.forEach((item) => {
    document.querySelector('#vocab').innerHTML += `<div class="card">
            <div class="card-body">
                <h4 class="card-title">${item.title}</h4>
                <hr>
                <p class="card-text">${item.description}</p>
                <hr>
                <p class="card-text">${item.tech}</p>
                <hr>
                <button class="btn btn-info" id="edit-vocab-btn--${item.firebaseKey}">Edit</button>
                <button class="btn btn-danger" id="delete-vocab-btn--${item.firebaseKey}">Delete</button>
            </div>
        </div>`;
  });
};

const emptyVocab = () => {
  document.querySelector('#vocab').innerHTML = '<h1>No Items</h1>';
};

export { showVocab, emptyVocab };
