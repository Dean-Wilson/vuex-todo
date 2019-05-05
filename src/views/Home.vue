<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your ToDo App"/>
    <h2>Todos:</h2>
    <input type="text" placeholder="Do this..." @keyup.enter="addTodo">
    <ToDos></ToDos>
    <button @click="completeAll" v-show="!allTodosCompleted">Complete all</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import ToDos from '@/components/ToDos.vue'
import { mapMutations, mapGetters, mapState } from 'vuex'

export default {
  name: 'home',
  components: {
    HelloWorld, ToDos
  },
  computed: {
    ...mapGetters(['allTodosCompleted'])
  },
  methods: {
    ...mapMutations(['completeAll']),
    addTodo (e) {
      let body = e.target.value
      this.$store.commit('addTodo', body)
      e.target.value = ''
    }
  }
}
</script>
