const button = document.querySelector('.button-34');
const modalContainer = document.querySelector('#modal-container');
const body=document.querySelector('body');

button.addEventListener('click', () => {
    modalContainer.removeAttribute('class');
    modalContainer.classList.add('four');
    body.classList.add('modal-active');
})

modalContainer.addEventListener('click', () => {
    modalContainer.classList.add('out');
    body.classList.remove('modal-active');
})