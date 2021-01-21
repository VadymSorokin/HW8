const inputField = document.querySelector('#input-user');
const addButton = document.querySelector('#add-button');
const toDoList = document.querySelector('#to-do-list');

const clearInput = () => {
	inputField.value = '';
}

const addItem = () => {
	const list = document.createElement('li');
	list.style.backgroundColor = 'yellow';
	toDoList.append(list);
	list.textContent = inputField.value;
	const statusButton = document.createElement('button');
	statusButton.innerHTML = 'mark as complete';
	toDoList.append(statusButton);
	const statusChange = () => {
		list.style.backgroundColor = 'green';
	};
	statusButton.addEventListener('click', statusChange);
	const deleteButton = document.createElement('button');
	deleteButton.innerHTML = 'delete';
	toDoList.append(deleteButton);
	const deleteItem = () => {
		list.remove();
		statusButton.remove();
		deleteButton.remove();
	}
	deleteButton.addEventListener('click', deleteItem);
}
addButton.addEventListener('click', addItem);
addButton.addEventListener('click', clearInput);
