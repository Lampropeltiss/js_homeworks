const buttons = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab__content");

const toggleTabs = (num) => {
    for (let i = 0; i < buttons.length; i++) {
        if (i == num) {
            buttons[i].classList.add("tab_active");
            contents[i].classList.add("tab__content_active");
        } else {
            buttons[i].classList.remove("tab_active");
            contents[i].classList.remove("tab__content_active");
        }
    }
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = () => {
        toggleTabs(i);
    }
}
