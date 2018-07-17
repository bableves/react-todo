var $ = require('jquery');

module.exports = {
  filterTodos: function (todos, showCompleted, searchText) {
    var filteredTodos = todos;

    // Filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });
    //Filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      var text=todo.text.toLowerCase();
      return searchText.length === 0 || text.indexOf(searchText) > -1;
    });
    //Sort todos with non-completed first
    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed) {
        return -1; // -1 means "a" comes before "b"
      } else if (a.completed && !b.completed) {
        return 1; // 1 means "b" comes before "a"
      } else {
        return 0; // 0 means there is no need to change order
      }
    });

    return filteredTodos;
  }
};
