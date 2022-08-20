let dead = document.getElementById('dead');
let lost = document.getElementById('lost');
let holes = document.getElementsByClassName("hole");

function func() {
    if (this.className.includes('hole_has-mole') === true) {
        dead.textContent++;
        if (Number(dead.textContent) === 10) {
            alert('Победа :)');
            dead.textContent = 0;
            lost.textContent = 0;
        }
    }
    else {
        lost.textContent++;
        if (Number(lost.textContent) === 5) {
            alert('Вы проиграли :(');
            dead.textContent = 0;
            lost.textContent = 0;
        }
    }
}

for (let elem of holes) {
	elem.addEventListener('click', func);
}