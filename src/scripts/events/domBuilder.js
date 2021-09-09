const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
    <div id="navbar"></div>
    <div id="main-container">
        <div id="form-container"></div>
        <div id="languages"></div>
        <div id="vocab">
        </div>
    </div>`;
};

export default domBuilder;
