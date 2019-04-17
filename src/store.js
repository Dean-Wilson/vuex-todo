import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      { body: 'Go to store', done: false },
      { body: 'Go to shop', done: true },
      { body: 'Go to 711', done: false }
    ]
  },
  mutations: {
    completeAll () {
      this.state.todos.forEach(todo => {
        todo.done = true
      })
    },
    toggleTodo (state, todo) {
      todo.done = !todo.done
    }
  },
  actions: {

  }
})
