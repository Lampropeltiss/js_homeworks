counter = document.getElementById("clicker__counter");
speedo = document.getElementById("clicker__speed");
pic = document.getElementById("cookie");
let scale = 30;

last_click = Date.now();

pic.onclick = () => {
    new_click = Date.now();
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