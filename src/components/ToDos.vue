<template>
  <ul>
    <li v-for="(todo, index) in todos" v-bind:key="index">
      <input type="checkbox" v-bind:checked="todo.done" @change="toggleTodo(todo)">
      <label v-text="todo.body"></label>
      <button class="del" @click="deleteTodo(todo)">X</button>
    </li>
  </ul>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'ToDos',
  props: {
  },
  computed: {
    ...mapState(['todos'])
  },
  methods: {
    ...mapMutations(['completeAll', 'toggleTodo', 'deleteTodo'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style: none;
}
li {
}
a {
  color: #42b983;
}
button.del {
  margin-left: 5px;
}
</style>
