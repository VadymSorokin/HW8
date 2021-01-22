const inputField = document.querySelector('#input-user');
const addButton = document.querySelector('#add-button');
const toDoList = document.querySelector('#to-do-list');
const notice = document.querySelector('.notice');
const clearInput = () => {
	inputField.value = '';
}
const delEmptyList = () => {
	if (toDoList.firstChild !== null) notice.innerHTML = 'Your list to do, lazy monkey :';
}
const emptyList = () => {
	if (toDoList.firstChild === null) notice.innerHTML = 'your list is empty ';
}
const addItem = () => {
	const list = document.createElement('li');
	list.style.backgroundColor = 'yellow';
	toDoList.append(list);
	list.textContent = inputField.value;
	const statusButton = document.createElement('button');
	statusButton.innerHTML = 'mark as complete';
	toDoList.append(statusButton);
	const statusDone = () => {
		list.style.backgroundColor = 'green';
	};
	statusButton.addEventListener('click', statusDone);
	const deleteButton = document.createElement('button');
	deleteButton.innerHTML = 'delete';
	toDoList.append(deleteButton);
	const deleteItem = () => {
		list.remove();
		statusButton.remove();
		deleteButton.remove();
	}
	deleteButton.addEventListener('click', deleteItem);
	deleteButton.addEventListener('click', emptyList);
	};
addButton.addEventListener('click', addItem);
addButton.addEventListener('click', clearInput);
addButton.addEventListener('click', delEmptyList);