let timer = document.getElementById("timer");
let message = "Вы победили в конкурсе!";

let timerset = setInterval(() => {
    timer.textContent = Number(timer.textContent) - 1;
    if (Number(timer.textContent) == 0) {
        alert(message);
        clearInterval(timerset);
        location = "https://ru.wikipedia.org/wiki/Lampropeltis_annulata";
    }
}, 1000)
