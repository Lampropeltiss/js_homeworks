const block = document.querySelector(".reveal");

window.addEventListener("scroll", () => {
    const {top, bottom} = block.getBoundingClientRect();

    if (bottom > 0 && top < window.innerHeight) {
        block.classList.add("reveal_active");
    } else {
        block.classList.remove("reveal_active");
    }
})
