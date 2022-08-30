const fontSize = document.getElementsByClassName('font-size');
const book = document.getElementById('book');


for (let item of fontSize) {
	item.onclick = () => {
		if (item.getAttribute('data-size') === 'small') {
			deleteClass();
			item.classList.add('font-size_active');
			book.classList.remove('font-size_big');
			book.classList.add('font-size_small');
		} else if (item.getAttribute('data-size') === 'big') {
			deleteClass();
			item.classList.add('font-size_active');
			book.classList.remove('font-size_small');
			book.classList.add('font-size_big');
		} else {
			deleteClass();
			item.classList.add('font-size_active');
			book.classList.remove('font-size_big');
			book.classList.remove('font-size_small');
		};
		return false;
	};
};

function deleteClass() {
	let element = document.querySelector('.font-size_active');
	element.classList.remove('font-size_active');
}