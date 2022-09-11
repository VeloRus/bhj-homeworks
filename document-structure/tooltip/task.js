const hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));

hasTooltip.forEach(element => {
  element.addEventListener('click', (event) => {
    event.preventDefault();
    const tooltip = document.querySelector('.tooltip');
    if(tooltip != null) {
        tooltip.remove();
        return;
    }
    addTip(element);
  })
})

function addTip(item) { 
  item.insertAdjacentHTML('afterEnd',`<div class="tooltip tooltip_active">${item.title}</div>`);
  const tooltipNew = document.querySelector('.tooltip');
  const coordinates = item.getBoundingClientRect();
  tooltipNew.setAttribute('data-position', 'bottom');
  tooltipNew.setAttribute('style', `left: ${coordinates.left}px; top: ${coordinates.bottom}px;`);
}