const cases = document.querySelectorAll(".rotator__case");

const toogleCases = () => {
    cases.forEach((item) => {
        item.classList.remove("rotator__case_active");
    })

    const newCase = cases[Math.floor(Math.random() * 6)];
    const color = newCase.dataset.color;

    newCase.classList.add("rotator__case_active");
    newCase.style.color = color;
}

setInterval(() => {
    toogleCases();
}, 1000)

