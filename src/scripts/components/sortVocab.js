const showSorting = () => {
  document.querySelector('#sort-container').innerHTML = `
        <p class="mt-2">
        <a id="new-sort" class= "sort-link" href="#">[newest]</a> | 
        <a id="old-sort" class= "sort-link" href="#">[oldest]</a> | 
        <a id="alph-sort" class= "sort-link" href="#">[alphebetical]</a>
        </p>
    `;
};

export default showSorting;
