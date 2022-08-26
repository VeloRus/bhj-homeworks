const links = document.querySelectorAll('.menu__link');

links.forEach((item) => {
    item.onclick = function (event) {
        if(item.closest('.menu__item').querySelector('.menu_sub.menu_active')) {
            item.closest('.menu__item').querySelector('.menu_sub.menu_active').className = 'menu menu_sub';
            return false;
        } else if (item.closest('.menu__item').querySelector('.menu_sub')) {
            const activeMenu = item.closest('.menu_main').querySelectorAll('.menu_active');
                if (activeMenu.length > 0) {
                    activeMenu.forEach((item) => item.classList.remove('menu_active'));
                }

            item.closest('.menu__item').querySelector('.menu_sub').classList.toggle('menu_active');

            return false
        }
    };
});