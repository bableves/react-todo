var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass ({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: 1,
          text: 'Walk the fish'
        }, {
          id: 2,
          text: 'Clean the desert'
        }, {
          id: 3,
          text: 'Do all the pushups'
        }, {
          id: 4,
          text: 'Drink everything'
        }, {
          id: 5,
          text: 'Burning button e'
        }, {
          id: 6,
          text: 'Waiting for node modules to be initialized'
        }
      ]
    };
  },
  handleAddTodo: function (text) {
    alert ('New Todo: ' + text);
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState ({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  },
  render: function () {
    var {todos} = this.state;
    return (
      <div>
       <TodoSearch onSearch={this.handleSearch} />
       <TodoList todos={todos}/>
       <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
