const form = document.getElementById('form');
const progress = document.getElementById('progress');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
  xhr.upload.addEventListener('progress', (e) => {
    progress.value = e.loaded / e.total
  });
  xhr.send(new FormData(form));
});