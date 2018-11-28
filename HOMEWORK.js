function homework(renderList) {
  // ❌ DO NOT CHANGE THE NAMES OF THE FUNCTIONS (eg. onAddTodo)
  //    DO NOT REMOVE renderList(todos); FROM THE END OF THE FUNCTIONS

  // 👇 ONLY EDIT BELOW THIS LINE 👇

  // The todos when you first load the page
  let todos = ["buy milk", "go to gym", "do CYF homework"];

  // ✅This function should:
  // ◽ remove all of the todo items
  function onClearAll() {
    todos.length = 0; //  we can Set the array length to zero
    // or we  can replace an array with an empty array todos = [];

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
    // Add code here

    if (newTodoText.length < 4) {
      //process.exit(1);
      alert(newTodoText + " It should be more than 3 characters long ");
    } else {
      todos.push(newTodoText);
    }
    renderList(todos);
  }

  // ✅This function should:
  // ◽ remove the item at the selected index
  function onRemoveTodo(index) {
    // Add code here
    todos.splice(index, 1);
    renderList(todos);
  }

  // ✅This function should:
  // ◽ add a capital X to the start of the item ('buy milk' => 'X buy milk')
  // ◽ bonus: don't add an X if it already has one (it's already complete)
  // ◽ super bonus: remove the X if it already has one (put it back to incomplete)
  function onCompleteTodo(index) {
    // Add code here
    if (todos[index].startsWith("X")) {
      todos[index] = todos[index].slice(1);
    } else {
      todos[index] = "X " + todos[index];
    } //I think there will be a problem that we can't add new todo that starts with X because it
    // will always consider it complete .

    renderList(todos);
  }

  // ✅This function should:
  // ◽ remove from the list all of the completed items (that start with 'X')
  function onRemoveCompleted() {
    // Add code here
    todos = todos.filter(function(item) {
      return !item.startsWith("X");
    });
    renderList(todos);
  }

  // ✅This function should:
  // ◽ add an exclamation mark ('!') to the end of every item in the list
  function onUrgent() {
    todos = todos.map(function(item) {
      return item + "!";
    }); // Add code here
    console.log(todos);
    renderList(todos);
  }

  // ✅This function should:
  // ◽ display an alert with the first item on the list not marked as done (first without an 'X')
  // ◽ bonus: consider what will happen if there are no more items left to do :find will returns
  // undefined. so the alert will return undefined .
  function onWhatNext() {
    alert(
      todos.find(function(item) {
        return !item.startsWith("X");
      })
    );
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
