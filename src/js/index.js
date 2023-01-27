const botaoTreiler =document.querySelector(".botao-trailer");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;
function alternarModal() {
    modal.classList.toggle("aberto");
}
botaoTreiler.addEventListener("click", () => {
    alternarModal();
video.setAttribute("src",linkDoVideo);
});

const botaoFecharModal = document.querySelector(".fechar-modal");

botaoFecharModal.addEventListener("click", () => { alternarModal();
        video.setAttribute("src", "");});




