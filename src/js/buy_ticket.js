
var btns = document.querySelectorAll(".js-buy-btn");
var modal =  document.querySelector('.modal');
var iconClose = document.querySelector('.modi-close');
var modalContainer = document.querySelector('.modal-container');

 for (let i of btns) {
    i.onclick = function () {
        modal.classList.add('open');
    }
 }

iconClose.onclick = function () {
    document.querySelector('.modal.open').classList.remove('open');
}

modal.onclick = function () {
    document.querySelector('.modal.open').classList.remove('open');
}

modalContainer.onclick = function (e) {
    e.stopPropagation();
}