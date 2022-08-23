let modalMain = document.getElementById("modal_main");
modalMain.classList.add('modal_active');

let modalClose = document.getElementsByClassName("modal__close");

for (item of modalClose) {
    item.onclick = function() {
        modalMain.className = "modal";
        modalSuccess.className = "modal"
    }
}

let showSuccess = document.getElementsByClassName("show-success");
let modalSuccess = document.getElementById("modal_success");
showSuccess.item(0).onclick = function() {
    modalSuccess.className = "modal modal_active";
    modalMain.className = "modal";
}