let counter = document.getElementById("clicker__counter");
let speedo = document.getElementById("clicker__speed");
let pic = document.getElementById("cookie");
let scale = 30;

let last_click = Date.now();

pic.onclick = () => {
    let new_click = Date.now();
    speedo.textContent = 1000/(new_click - last_click);
    last_click = new_click;
    counter.textContent = Number(counter.textContent) + 1;
    
    if (Number(counter.textContent) % 2 != 0) {
        pic.width += scale;
        pic.height += scale;
    } else {
        pic.width -= scale;
        pic.height -= scale;
    }
}