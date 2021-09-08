import clearDom from '../helpers/clearDom';

const showVocab = (array) => {
  clearDom();
  array.forEach((item) => {
    document.querySelector('#vocab').innerHTML += `<div class ="card">
            <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">${item.description}</p>
                <hr>
                <p class="card-text">${item.tech}</p>
                <hr>
                <i class="btn btn-success fas fa-eye" id="view-book-btn--${item.firebaseKey}"></i>
                <button class="btn btn-info" id="edit-book-btn--${item.firebaseKey}">Edit</button>
                <button class="btn btn-danger" id="delete-book--${item.firebaseKey}">Delete</button>
            </div>
        </div>`;
  });
};

const emptyVocab = () => {
  document.querySelector('#vocab').innerHTML = '<h1>No Items</h1>';
};

export { showVocab, emptyVocab };
