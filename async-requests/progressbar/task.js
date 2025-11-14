const progressBar = document.getElementById("progress");
const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
    xhr.upload.onprogress = (event) => {
        progressBar.setAttribute("max", event.total);
        progressBar.value = event.loaded;
    }

    const formData = new FormData(form);
    xhr.send(formData);
})
