// Abrir e fechar o modal
const contactButton = document.getElementById("contactButton");
const modal = document.getElementById("contactModal");
const closeModal = document.getElementsByClassName("close")[0];

contactButton.onclick = function () {
    modal.style.display = "block";
};

closeModal.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
