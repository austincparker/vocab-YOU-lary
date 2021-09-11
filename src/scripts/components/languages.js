const langBtns = () => {
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#lang-container').innerHTML = `
    <button id="javascript-btn" class="btn btn-outline-dark lang-btn" type="button">Javascript</button>
    <button id="css-btn" class="btn btn-outline-dark lang-btn" type="button">CSS</button>
    <button id="html-btn" class="btn btn-outline-dark lang-btn" type="button">HTML</button>
    <button id="react-btn" class="btn btn-outline-dark lang-btn" type="button">React</button>
    `;
};

export default langBtns;
