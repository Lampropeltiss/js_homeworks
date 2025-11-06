const valueButton = document.getElementsByClassName("dropdown__value")[0];
const list = document.getElementsByClassName("dropdown__list")[0];
const linkButtons = document.querySelectorAll('.dropdown__link');

const toggleList = () => {
    list.classList.toggle("dropdown__list_active");
}

valueButton.onclick = () => {
    toggleList();
}

linkButtons.forEach(function (linkButton) {
    linkButton.addEventListener('click', function (event) {
        event.preventDefault();
        valueButton.textContent = linkButton.textContent;
        toggleList();
    });
});
