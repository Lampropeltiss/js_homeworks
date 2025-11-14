const loaderImg = document.getElementById("loader");
const itemsList = document.getElementById("items");

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses");
xhr.responseType = 'json';
xhr.send();

function insertItem(code, value) {
    const itemHtml = `
    <div class="item">
        <div class="item__code">
            ${code}
        </div>
        <div class="item__value">
            ${value}
        </div>
        <div class="item__currency">
            руб.
        </div>
    </div>
    `;
    itemsList.insertAdjacentHTML("beforeend", itemHtml);
}


xhr.onload = () => {
    console.log(xhr.status, xhr.statusText);
    const valutesList = xhr.response["response"]["Valute"];
    loaderImg.classList.remove("loader_active");
    for (let valute in valutesList) {
        const code = valutesList[valute]["CharCode"];
        const value = valutesList[valute]["Value"];
        insertItem(code, value);
    }
}
