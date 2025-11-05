let caught_counter = document.getElementById("dead");
let missed_counter = document.getElementById("lost");

getHole = index => document.getElementById(`hole${index}`);

const clearCounters = function() {
    caught_counter.textContent = 0;
    missed_counter.textContent = 0;
}

for (let i = 1; i < 10; i++) { 
    const hole = getHole(i);

    hole.onclick = () => {
        if (hole.className.includes('hole_has-mole')) {
            hole.style.border = "5px solid green";
            caught_counter.textContent = Number(caught_counter.textContent) + 1;
        } else {
            hole.style.border = "5px solid red";
            missed_counter.textContent = Number(missed_counter.textContent) + 1;
        }

        let borderTimeout = setTimeout(() => {
            hole.style.border = "5px solid gray";
            clearTimeout(borderTimeout);
        }, 500)

        if (Number(missed_counter.textContent) >= 5) {
            alert("Проигрыш...");
            clearCounters();
        }
        if (Number(caught_counter.textContent) >= 10) {
            alert("Победа!");
            clearCounters();
        }
    }
}

