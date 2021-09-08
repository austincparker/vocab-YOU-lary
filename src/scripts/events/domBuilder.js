const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
    <div id="navbar"></div>
    <div id="main-container">
        <div id="languages"></div>
        <div id="vocab">
        </div>
    </div>`;
};

export default domBuilder;
