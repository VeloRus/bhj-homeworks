const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownItem =  Array.from(document.querySelectorAll(".dropdown__item"));


dropdownValue.addEventListener('click', () => {
    if (dropdownList.className == 'dropdown__list') {
    dropdownList.classList.add('dropdown__list_active')
    } else { dropdownList.className = 'dropdown__list'}
 });


 for (let item of dropdownItem) {
    item.addEventListener("click", function(event) {
        event.preventDefault();
        dropdownValue.textContent = dropdownItem[dropdownItem.indexOf(item)].querySelector(".dropdown__link").textContent;
        dropdownList.className = "dropdown__list";
    })
}