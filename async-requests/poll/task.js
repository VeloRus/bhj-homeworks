const pollTitle = document.querySelector('.poll__title');
const pollAnswers = document.querySelector('.poll__answers');

const xhr = new XMLHttpRequest;
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();
xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
        const obj = JSON.parse(xhr.responseText);
        const answers = obj.data.answers;
        pollTitle.insertAdjacentHTML('afterbegin', obj.data.title);
        answers.forEach(element => {
            pollAnswers.innerHTML += 
            `<button class="poll__answer" style = "margin-right: 10px">${element}</button>`
        });        
    }    
})

pollAnswers.addEventListener('click', () => {
    alert('Спасибо, ваш голос засчитан!')
})