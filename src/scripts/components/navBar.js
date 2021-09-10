const navBar = () => {
  document.querySelector('#navbar').innerHTML = `<nav class="navbar navbar-light bg-light">
    <form class="container-fluid justify-content-start">
      <button id= "logo" class="btn btn-outline-secondary" type="button">LOGO</button>
      <button id="add-vocab-btn" class="btn btn-outline-success me-2" type="button">Create Entry</button>
      <span id="logout-btn"></span>
    </form>
  </nav>`;
};

export default navBar;
