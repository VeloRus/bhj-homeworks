const reveal = document.getElementsByClassName('reveal');

for (let item of reveal) {
    document.addEventListener('scroll', () => {
        if (item.getBoundingClientRect().top < window.innerHeight && item.getBoundingClientRect().bottom > 0) {
            item.className = 'reveal reveal_active';
        } else {
            item.className = 'reveal';
        }
    })
}