const closeButton = document.querySelector(".modal__close");
const modal = document.querySelector(".modal");

const getCookie = (name) => {
    const value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) {
        return parts
            .pop()
            .split(";")
            .shift();
    }
}

// document.cookie = `modalClosed=; Expires=Thu, 01 Jan 1970 00:00:00 GMT`;
if (getCookie("modalClosed") != "true") {
    modal.classList.add("modal_active");
}

closeButton.onclick = () => {
    modal.classList.remove("modal_active");
    document.cookie = `modalClosed=true`;
}