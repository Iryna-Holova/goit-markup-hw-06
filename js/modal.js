(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.modal.addEventListener('click', closeModal);

  function toggleModal(e) {
    refs.modal.classList.toggle('is-hidden');
    document.querySelector('html').classList.toggle('modal-show');
  }

  function closeModal(e) {
    if (e.target !== e.currentTarget) return;
    refs.modal.classList.add('is-hidden');
    document.querySelector('html').classList.remove('modal-show');
  }
})();
