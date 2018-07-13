var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass ({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Walk the fish'
        }, {
          id: uuid(),
          text: 'Clean the desert'
        }, {
          id: uuid(),
          text: 'Do all the pushups'
        }, {
          id: uuid(),
          text: 'Drink everything'
        }, {
          id: uuid(),
          text: 'Burning button e'
        }, {
          id: uuid(),
          text: 'Waiting for node modules to be initialized'
        }
      ]
    };
  },
  handleAddTodo: function (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text
        }
      ]
    });
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
