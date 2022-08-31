const rotator = Array.from(document.getElementsByClassName('rotator__case'));
let i = 0;

setInterval ( function () {  
  rotator[i].classList.remove('rotator__case_active');
  if (i == rotator.length - 1) {
    i = 0;
    rotator[i].classList.add('rotator__case_active');
  } else {
      i++;
      rotator[i].classList.add('rotator__case_active');
  }   
  }, 1000)
