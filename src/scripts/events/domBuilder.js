const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
    <div id="navbar"></div>
    <div id="main-container" class="main-container">
        <div id="form-container" class="form-container"></div>
        <div id="lang-container" class="languages"></div>
        <div id="vocab" class="vocab d-flex justify-content-center">
        </div>
    </div>`;
};

export default domBuilder;
