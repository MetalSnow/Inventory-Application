const modalItem = document.getElementById('addItemDialog');
const addItem = document.querySelector('#addItem');
const cancelItem = document.querySelector('#cancelItem');

addItem.addEventListener('click', () => modalItem.showModal());
cancelItem.addEventListener('click', () => modalItem.close());

document.querySelectorAll('li').forEach((el) => {
  const editButton = el.querySelector('.edit-button');
  const editForm = el.querySelector('.edit-form');
  const cancelButton = el.querySelector('.cancel-edit');
  const itemInfo = el.querySelectorAll('p');

  editButton.addEventListener('click', function () {
    itemInfo.forEach((p) => (p.style.display = 'none'));
    editButton.style.display = 'none';
    editForm.style.display = 'block';
  });

  cancelButton.addEventListener('click', function () {
    itemInfo.forEach((p) => (p.style.display = 'block'));
    editButton.style.display = 'inline';
    editForm.style.display = 'none';
  });
});
