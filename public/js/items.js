const modalItem = document.getElementById('addItemDialog');
const addItem = document.querySelector('#addItem');
const cancelItem = document.querySelector('#cancelItem');

addItem.addEventListener('click', () => modalItem.showModal());
cancelItem.addEventListener('click', () => modalItem.close());

const categoryId = window.location.href.split('').pop();

document.getElementById('categoryId').value = categoryId;
