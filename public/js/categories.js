const modalCat = document.getElementById('addCategoryDialog');
const addCat = document.querySelector('#addCategory');
const cancelCat = document.querySelector('#cancelCategory');

addCat.addEventListener('click', () => modalCat.showModal());
cancelCat.addEventListener('click', () => modalCat.close());

document.querySelectorAll('.list').forEach((item) => {
  const editButton = item.querySelector('.edit-button');
  const editForm = item.querySelector('.edit-form');
  const cancelButton = item.querySelector('.cancel-edit');
  const categoryLink = item.querySelector('a');

  // Show form when edit button clicked
  editButton.addEventListener('click', function () {
    categoryLink.style.display = 'none';
    editButton.style.display = 'none';
    editForm.style.display = 'block';
  });

  // Hide form when cancel button clicked
  cancelButton.addEventListener('click', function () {
    categoryLink.style.display = 'inline';
    editButton.style.display = 'inline';
    editForm.style.display = 'none';
  });
});

// const categoryId = window.location.pathname.split('/').pop();

// document.getElementById('categoryId').value = categoryId;
