const domBuilder = () => {
  document.querySelector('#app').innerHTML = `<div id="login-container"></div>
    <div id="navbar"></div>
    <div id="languages"></div>
    <div id="vocab"></div>`;
};

export default domBuilder;
