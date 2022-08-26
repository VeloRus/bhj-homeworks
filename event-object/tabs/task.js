const tab = Array.from(document.querySelectorAll('.tab'));
const tabContent = Array.from(document.querySelectorAll('.tab__content'));

tab.forEach((value, index) => {    
    value.addEventListener('click', () => {
        tab[index].classList.add('tab_active');
        tabContent[index].classList.add('tab__content_active');

        document.querySelector('.tab_active').classList.remove('tab_active');
        document.querySelector('.tab__content_active').classList.remove('tab__content_active');
    })
})