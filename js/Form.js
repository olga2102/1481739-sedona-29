const popup = document.querySelector('.modal');
const closePopupButton = document.querySelector('.button-close');

closePopupButton.addEventListener('click', function () { 
    popup.classList.toggle('modal-close');
});
