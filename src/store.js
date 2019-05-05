import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allTodosCompleted: false,
    todos: [
      { body: 'Go to store', done: false, editing: false, edited: '' },
      { body: 'Go to shop', done: false, editing: false, edited: '' },
      { body: 'Go to 711', done: false, editing: false, edited: '' }
    ],
  },
  getters: {
    allTodosCompleted ({ todos }) {
      return todos.every(todo => todo.done)
    }
  },
  mutations: {
    completeAll ({ todos }) {
      todos.forEach(todo => {
        todo.done = true
      })
    },
    toggleTodo ( { }, todo ) {
      todo.done = !todo.done
    },
    deleteTodo ( { todos }, todo ) {
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
