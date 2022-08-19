const timer = document.getElementById('timer');

let countdown = setInterval(function() {
    if (timer.textContent == 0) {
        alert('Вы победили в конкурсе');
        clearInterval(countdown);
    } else {
        timer.textContent--;
    }
}, 1000)