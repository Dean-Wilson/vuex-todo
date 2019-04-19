<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your ToDo App"/>
    <h2>Todos:</h2>
    <ToDos></ToDos>
    <button @click="completeAll" v-show="!allCompleted">Complete all</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import ToDos from '@/components/ToDos.vue'
import { mapMutations } from 'vuex'

export default {
  name: 'home',
  components: {
    HelloWorld, ToDos
  },
  methods: {
    ...mapMutations(['completeAll'])
  }
}
</script>
