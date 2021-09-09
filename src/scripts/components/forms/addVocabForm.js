const addVocabForm = (obj = {}) => {
  document.querySelector('#vocab').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `
    <form id="submit-vocab-form" class="mb-4">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" aria-describedby="vocabTitle" placeholder="Enter Entry Title" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea class="form-control" placeholder="Entry Description" id="description" style="height: 100px">${obj.description || ''}</textarea>
      </div>
      <div class="form-group">
        <label for="languages">Languages</label>
        <textarea class="form-control" placeholder="Specify Associated Languages" id="description" style="height: 100px">${obj.tech || ''}</textarea>
      </div>
      <button type="submit" 
      id="${obj.firebaseKey ? `update-vocab--${obj.firebaseKey}` : 'submit-vocab'}"
      class="btn btn-primary">Submit Entry</button>
    </form>
    `;
};

export default addVocabForm;
