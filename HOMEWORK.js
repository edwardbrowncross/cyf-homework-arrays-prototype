function homework (renderList) {
	// ❌ DO NOT CHANGE THE NAMES OF THE FUNCTIONS (eg. onAddTodo)
	//    DO NOT REMOVE renderList(todos); FROM THE END OF THE FUNCTIONS

	// 👇 ONLY EDIT BELOW THIS LINE 👇

	// The todos when you first load the page
	let todos = [
		'buy milk',
		'go to gym',
		'do CYF homework',
	];

	// ✅This function should:
	// ◽ remove all of the todo items
	function onClearAll () {
		// Add code here

		renderList(todos);
	}

	// ✅This function should:
	// ◽ sort the array of todos alphabetically
	function onSort () {
		// Add code here

		renderList(todos);
	}

	// ✅This function should:
	// ◽ reverse the order of the todos in the array
	function onReverse () {
		// Add code here

		renderList(todos);
	}

	// ✅This function should:
	// ◽ add a new item to the end of the todos array
	// ◽ bonus: do not allow new items to be less than 3 characters long
	function onAddTodo (newTodoText) {
		// Add code here

		renderList(todos);
	}

	// ✅This function should:
	// ◽ remove the item at the selected index
	function onRemoveTodo (index) {
		// Add code here

		renderList(todos);
	}

	// ✅This function should:
	// ◽ add a capital X to the start of the item ('buy milk' => 'X buy milk')
	// ◽ bonus: don't add an X if it already has one (it's already complete)
	// ◽ super bonus: remove the X if it already has one (put it back to incomplete)
	function onCompleteTodo (index) {
		// Add code here

		renderList(todos);
	}

	// ✅This function should:
	// ◽ remove from the list all of the completed items (that start with 'X')
	function onRemoveCompleted () {
		// Add code here

		renderList(todos);
	}

	// ✅This function should:
	// ◽ add an exclamation mark ('!') to the end of every item in the list
	function onUrgent () {
		// Add code here
		
		renderList(todos);
	}

	// ✅This function should:
	// ◽ display an alert with the first item on the list not marked as done (first without an 'X')
	// ◽ bonus: consider what will happen if there are no more items left to do
	function onWhatNext () {
		alert('This is just a dummy message!');
	}

	// ☝ ONLY EDIT ABOVE THIS LINE ☝
	renderList(todos);
	return {
		onAddTodo, onRemoveTodo, onCompleteTodo, onClearAll, onSort, onReverse, onRemoveCompleted, onUrgent, onWhatNext
	};
}