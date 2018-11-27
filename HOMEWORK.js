function homework(renderList) {
  // ❌ DO NOT CHANGE THE NAMES OF THE FUNCTIONS (eg. onAddTodo)
  //    DO NOT REMOVE renderList(todos); FROM THE END OF THE FUNCTIONS

  // 👇 ONLY EDIT BELOW THIS LINE 👇

  // The todos when you first load the page
  let todos = ["buy milk", "go to gym", "do CYF homework"];

  // ✅This function should:
  // ◽ remove all of the todo items
  function onClearAll(todo) {
    todos = []; // Add code here

    renderList(todos);
  }

  // ✅This function should:
  // ◽ sort the array of todos alphabetically
  function onSort() {
    todos.sort(); // Add code here

    renderList(todos);
  }

  // ✅This function should:
  // ◽ reverse the order of the todos in the array
  function onReverse() {
    todos.reverse(); // Add code here

    renderList(todos);
  }

  // ✅This function should:
  // ◽ add a new item to the end of the todos array
  // ◽ bonus: do not allow new items to be less than 3 characters long
  function onAddTodo(newTodoText) {
    if (newTodoText.length >= 3) {
      todos.push(newTodoText);
    } else {
      console.log("Your text is too short");
    } // Add code here

    renderList(todos);
  }

  // ✅This function should:
  // ◽ remove the item at the selected index
  function onRemoveTodo(index) {
    todos.splice(index, 1); // Add code here

    renderList(todos);
  }

  // ✅This function should:
  // ◽ add a capital X to the start of the item ('buy milk' => 'X buy milk')
  // ◽ bonus: don't add an X if it already has one (it's already complete)
  // ◽ super bonus: remove the X if it already has one (put it back to incomplete)
  function onCompleteTodo(index) {
    if (todos[index].charAt(0) == "X") {
      todos[index] = todos[index].substr(2);
    } else {
      todos[index] = "X " + todos[index]; // Add code here
    }
    renderList(todos);
  }

  // ✅This function should:
  // ◽ remove from the list all of the completed items (that start with 'X')
  function onRemoveCompleted() {
    todos.forEach(function(a) {
      if (a.charAt(0) == "X") {
        todos.splice(todos.indexOf(a), 1);
      }
      return todos;
    });
    // Add code here

    renderList(todos);
  }

  // ✅This function should:
  // ◽ add an exclamation mark ('!') to the end of every item in the list
  function onUrgent() {
    /* todos.map(function(item) {
      return item + "!";
	})*/
    for (i = 0; i < todos.length; i++) {
      todos[i] = todos[i] + "!";
    } // Add code here

    renderList(todos);
  }

  // ✅This function should:
  // ◽ display an alert with the first item on the list not marked as done (first without an 'X')
  // ◽ bonus: consider what will happen if there are no more items left to do
  function onWhatNext() {
    alertItme = todos.find(function(nextItem) {
      return nextItem[0] !== "X";
    });
    alert("The next things is " + alertItme);
  }

  // ☝ ONLY EDIT ABOVE THIS LINE ☝
  renderList(todos);
  return {
    onAddTodo,
    onRemoveTodo,
    onCompleteTodo,
    onClearAll,
    onSort,
    onReverse,
    onRemoveCompleted,
    onUrgent,
    onWhatNext
  };
}
