const book = document.getElementById("book");

// Отключение всех "пустых" ссылок
const links = document.querySelectorAll("a");
links.forEach((link) => {
    link.addEventListener("click", function (event) {
        if (link.className != "logo__link") {
            event.preventDefault();
        }
    })
})

const toggleButtons = (buttons, button, label) => {
    buttons.forEach(button => button.classList.remove(label));
    button.classList.add(label);
}

const removeLabble = (searchLable) => {
    book.classList.forEach((bookClass) => {
        if (bookClass.startsWith(searchLable)) {
            book.classList.remove(bookClass);
        }
    })
}

// Обработка кнопок изменения размера шрифта
const fontSizeButtons = document.querySelectorAll(".font-size");
fontSizeButtons.forEach((button) => {
    button.onclick = () => {
        toggleButtons(fontSizeButtons, button, "font-size_active");
        removeLabble("book_fs");
        if (button.dataset.size) {
            book.classList.add(`book_fs-${button.dataset.size}`);
        }
    };
});

// Обработка кнопок изменения цвета текста
const textColor = document.querySelector(".book__control_color");
const textColorButtons = Array.from(textColor.children).slice(1);
textColorButtons.forEach((button) => {
    button.onclick = () => {
        toggleButtons(textColorButtons, button, "color_active");
        removeLabble("book_color");
        book.classList.add(`book_color-${button.dataset.textColor}`);
    }
})

// Обработка кнопок изменения цвета фона
const bgColor = document.querySelector(".book__control_background");
const bgColorButtons = Array.from(bgColor.children).slice(1);
bgColorButtons.forEach((button) => {
    button.onclick = () => {
        toggleButtons(bgColorButtons, button, "color_active");
        removeLabble("book_bg");
        book.classList.add(`book_bg-${button.dataset.bgColor}`);
    }
})


