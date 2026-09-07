'use strict';

let currentModal;
const overlay = document.querySelector('.overlay');
const btnsCloseModal = document.querySelectorAll('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function (event) {
  const modalId = event.currentTarget.dataset.modal;
  currentModal = document.getElementById(modalId);
  currentModal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  currentModal.classList.add('hidden');
  overlay.classList.add('hidden');
  currentModal = null;
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

for (let i = 0; i < btnsCloseModal.length; i++) {
  btnsCloseModal[i].addEventListener('click', closeModal);
}

overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && currentModal) closeModal();
});
