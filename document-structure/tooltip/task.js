const objects = document.querySelectorAll(".has-tooltip");

objects.forEach((object) => {
    const tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");
    tooltip.innerHTML = object.getAttribute("title");
    object.append(tooltip);
})

const tooltips = document.querySelectorAll(".tooltip");

objects.forEach((object) => {
    object.addEventListener("click", (event) => {
        event.preventDefault();

        const tooltip = object.lastChild;
        tooltip.classList.add("tooltip_active");

        let { top, left } = object.getBoundingClientRect();
        tooltip.style.top = `${top + window.pageYOffset + 30}px`
        tooltip.style.left = `${left}px`
    })

    object.addEventListener("blur", () => {
        const tooltip = object.lastChild;
        tooltip.classList.remove("tooltip_active");
    })
})

