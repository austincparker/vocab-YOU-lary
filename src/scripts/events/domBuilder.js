const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
    <div id="navbar"></div>
    <div id="main-container">
        <div id="languages"></div>
        <div id="vocab">
            <h1>Welcome to vocab-YOU-lary!</h1>
        </div>
    </div>`;
};

export default domBuilder;
