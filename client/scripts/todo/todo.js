var todo = {
  setup: function(todos){
    todo.app = new todo.App({
      el: '#todo-app',
      items: todos
    });
  },
  // Pass true to enable debug mode, which starts with no data from the server.
  init: function(debug) {
    console.log('Starting todo app...');
    todo.api.sendRequest({
      method: 'GET',
      endpoint: 'http://localhost:3000/todos'
    }, function(err, res){
      if (err) { throw err; }
      if (!debug) {
        todo.setup(res.todos);
      } else {
        todo.setup();
      }
    });
  }
};
