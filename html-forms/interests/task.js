const checkboxes = [...document.querySelectorAll('.interest__check')];

checkboxes.forEach(chk => chk.onclick = e => {
    const parentLi = chk.closest('li.interest');
    parentLi.querySelectorAll('ul.interests .interest__check').forEach(childChk => childChk.checked = chk.checked);
});