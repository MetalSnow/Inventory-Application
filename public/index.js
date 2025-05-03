const modal = document.getElementById('addCategoryDialog');
const addBtn = document.querySelector('#addCategory');
const cancelBtn = document.querySelector('#cancelBtn');

addBtn.addEventListener('click', () => modal.showModal());
cancelBtn.addEventListener('click', () => modal.close());

document.querySelectorAll('li').forEach((item) => {
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
