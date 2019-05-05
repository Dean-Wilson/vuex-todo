import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      { body: 'Go to store', done: false, editing: false, edited: '' },
      { body: 'Go to shop', done: true, editing: false, edited: '' },
      { body: 'Go to 711', done: false, editing: false, edited: '' }
    ],
    allTodosCompleted: false
  },
  getters: {
    // allTodosCompleted ({ todos }) {
    //   return todos.every(todo => todo.done)
    // }
  },
  mutations: {
    completeAll ({ todos }) {
      todos.forEach(todo => {
        todo.done = true
      })
      this.state.allTodosCompleted = todos.every(x => x.done)
    },
    toggleTodo ({ todos, allTodosCompleted }, todo ) {
      let index = todos.indexOf(todo)
      let found = todos[index]
      found.done = !found.done
      this.state.allTodosCompleted = todos.every(todo => todo.done)
      console.log(todos)
    },
    deleteTodo ({ todos }, todo) {
      todos.splice(todos.indexOf(todo), 1)
    },
    addTodo ({ todos }, body) {
      todos.push({
        body,
        done: false
      })
    },
    editTodo ({ todos }, todo) {
      todo.editing = !todo.editing
    },
    updateTodo ({ todos }, todo) {
      console.log(todo.body)
    }
  },
  actions: {

  }
})
