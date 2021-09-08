import clearDom from '../helpers/clearDom';

const showVocab = (array) => {
  clearDom();
  array.forEach((item) => {
    document.querySelector('#vocab').innerHTML += `<div class ="card">
            <div class="card-body" style="height: 180px;">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">${item.description}</p>
                <hr>
                <p class="card-text">${item.tech}</p>
            </div>
        </div>`;
  });
};

const emptyVocab = () => {
  document.querySelector('#vocab').innerHTML = '<h1>No Items</h1>';
};

export { showVocab, emptyVocab };
