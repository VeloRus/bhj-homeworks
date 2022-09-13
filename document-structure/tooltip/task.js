let hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));
let div = document.createElement('div');

hasTooltip.forEach((element) => {
  element.addEventListener('click', (event) => { 
  event.preventDefault();
  div.classList.add('tooltip');
  if (div.classList.contains('tooltip_active')) {
      div.classList.remove('tooltip_active');
        if (div.textContent == element.title) {
        return false;
        }
    }

  div.textContent = element.title
  element.append(div)
  div.classList.add('tooltip_active')
  const position = element.getBoundingClientRect();
  div.style.left = position.left + 'px';
  div.style.top = position.bottom + 5 + 'px';
  })    
});

