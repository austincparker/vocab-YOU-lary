const navBar = () => {
  document.querySelector('#navbar').innerHTML = `<nav class="navbar navbar-light bg-light">
    <form class="container-fluid justify-content-start">
      <button id="home" class="btn btn-outline-secondary nav-btn" type="button">HOME</button>
      <button id="add-vocab-btn" class="btn btn-outline-success nav-btn" type="button">Create Entry</button>
      <span id="logout-btn"></span>
    </form>
  </nav>`;
};

export default navBar;
