const navBar = () => {
  document.querySelector('#navbar').innerHTML = `<nav class="navbar navbar-light bg-light">
    <form class="container-fluid justify-content-center">
      <button id="home" class="btn btn-outline-secondary nav-btn" type="button">vocab-YOU-lary</button>
      <button id="add-vocab-btn" class="btn btn-outline-success nav-btn" type="button">Create Entry</button>
      <button id="filter-btn" class="btn btn-outline-dark nav-btn" type="button">Filter</button>
      <div id="logout-btn"></div>
    </form>
  </nav>`;
};

export default navBar;
