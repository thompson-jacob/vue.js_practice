/* global Vue axios*/

var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Welcome to my todo app!",
      todos: [],
    };
  },
  methods: {
    loadTodos: function () {
      console.log("loadTodos");
      axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
        this.todos = response.data;
      });
    },
  },
});
