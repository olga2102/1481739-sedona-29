const popup = document.querySelector('.modal');
const closePopupButton = document.querySelector('.button-close');

closePopupButton.addEventListener('click', function (evt) { 
    evt.preventDefault();
    popup.classList.toggle('modal-close');
});
