const rotator = Array.from(document.getElementsByClassName('rotator__case'));

setInterval (function () {
    for (let i = 0; i < rotator.length; i++) {
      if (rotator[i].classList.contains('rotator__case_active')) {
        rotator[i].classList.remove('rotator__case_active');
        if (i + 1 === rotator.length) {
          i = 0;
          rotator[i].classList.add('rotator__case_active');
        } else {
          i++;
          rotator[i].classList.add('rotator__case_active');
        }
      }
    }
  }, 1000)

  