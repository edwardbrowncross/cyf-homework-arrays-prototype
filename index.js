// ❌ You do not need to modify this code.
//  ❕ This code is not a good example of what a modern web app should look like.

(function closure () {
	const TODO_LIST_SELECTOR = '#todos';
	const ERROR_SELECTOR = '#error';
	const NEW_TODO_VALUE_SELECTOR = '#new-todo input[type=text]';
	const TODO_FORM_SELECTOR = 'form';

	const printError = err => {
		const elem = document.querySelector(ERROR_SELECTOR);
		elem.innerHTML = err.toString();
		elem.className = '';
		console.error(err);
	};
	const clearError = () => {
		document.querySelector(ERROR_SELECTOR).className = 'empty';
	};
	const getNewTodoValue = () => document.querySelector(NEW_TODO_VALUE_SELECTOR).value;
	const clearNewTodoValue = () => (document.querySelector(NEW_TODO_VALUE_SELECTOR).value = '');
	const catchAndLog = fn => (...args) => {
		try {
			clearError();
			fn(...args);
		} catch (err) {
			printError(err);
		}
	};
	const catchAndLogAll = fns => Object.keys(fns)
		.filter(k => typeof fns[k] === 'function')
		.reduce((r, k) => ({ ...r, [k]: catchAndLog(fns[k]) }), fns);
	const itemIsDone = item => item.indexOf('X')===0;

	const renderItem = (item, i) => {
		const li = document.createElement('li');
		li.className = `todo-item ${itemIsDone(item) ? 'done' : ''}`;
		li.innerHTML = String(item);
		const deleteButton = document.createElement('button');
		deleteButton.className = 'todo-delete';
		deleteButton.innerHTML = '❌';
		deleteButton.setAttribute('formaction', `delete/${i}`);
		li.appendChild(deleteButton);
		const completeButton = document.createElement('button');
		completeButton.className = 'todo-complete';
		completeButton.innerHTML = '✔';
		completeButton.setAttribute('formaction', `complete/${i}`);
		li.prepend(completeButton);
		return li;
	};

	const renderList = arr => {
		if (!Array.isArray(arr)) {
			throw new Error(`renderList expected to receive array but got something of type ${typeof arr}: ${arr}`);
		}
		const todos = document.querySelector(TODO_LIST_SELECTOR);
		todos.innerHTML = '';
		arr.map(renderItem)
			.forEach(li => todos.appendChild(li));
	};

	function main () {
		const {
			onAddTodo,
			onRemoveTodo,
			onCompleteTodo,
			onClearAll,
			onSort,
			onReverse,
			onRemoveCompleted,
			onUrgent,
			onWhatNext
		} = catchAndLogAll(window.homework(renderList));
		
		document.querySelector(TODO_FORM_SELECTOR)
			.addEventListener('submit', catchAndLog(e => {
				e.preventDefault();
				const action = document.activeElement.getAttribute('formaction') || e.target.getAttribute('action');
				const [type, ...params] = action.split('/');

				if (type === 'add') {
					onAddTodo(getNewTodoValue());
					clearNewTodoValue();
				} else if (type === 'delete') {
					onRemoveTodo(parseInt(params[0]));
				} else if (type === 'complete') {
					onCompleteTodo(parseInt(params[0]));
				} else if (type === 'clear') {
					onClearAll();
				} else if (type === 'sort') {
					onSort();
				} else if (type === 'reverse') {
					onReverse();
				} else if (type === 'remove-complete') {
					onRemoveCompleted();
				} else if (type === 'exclame') {
					onUrgent();
				} else if (type === 'what-next') {
					onWhatNext();
				}
			}));
	}

	document.addEventListener('DOMContentLoaded', catchAndLog(() => main()));
}());