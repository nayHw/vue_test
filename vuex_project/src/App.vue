<template>
  <div id="app">
    <TodoList msg="Testing Vuex"/>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue'

export default {
  name: 'App',
  components: {
    TodoList
  }
}
</script>
