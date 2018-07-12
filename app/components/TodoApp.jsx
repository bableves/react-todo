var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass ({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        }, {
          id: 2,
          text: 'Clean the yard'
        }, {
          id: 3,
          text: 'Make the bed'
        }, {
          id: 4,
          text: 'Drink a lot'
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
  render: function () {
    var {todos} = this.state;
    return (
      <div>
       <TodoList todos={todos}/>
      </div>
    );
  }
});

module.exports = TodoApp;
