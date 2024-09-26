// Modal
const modal = document.getElementById("modalContato");
const btnModal = document.getElementById("btnModal");
const span = document.getElementsByClassName("close")[0];

btnModal.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
