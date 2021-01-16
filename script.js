const inputField = document.querySelector('#input-user');
const addButton = document.querySelector('#add-button');
const toDoList = document.querySelector('#to-do-list');

const toClearInput = () => {
	inputField.value = '';
}

const toAdd = () => {
	const list = document.createElement('li');
	toDoList.append(list);
	list.textContent = inputField.value;
}
addButton.addEventListener('click', toAdd);
addButton.addEventListener('click', toClearInput);