<template>
  <div class="container w-50 bg-secondary mt-2 py-2">
    <h3 class="text-primary pl-3">{{ msg }}</h3>
    <todo-form />
    <TodoView :lists='items' />
  </div>
</template>

<script>
import TodoView from '@/components/TodoView.vue'
import TodoForm from '@/components/TodoForm.vue'
import { mapState } from 'vuex'
export default {
  props: {
    msg: String
  },
  components:{
    TodoView,
    TodoForm
  },
  data(){
    return{
    }
  },
  computed: mapState({
    items: 'items'
  })
}
</script>

<style>
 div.container{
   border-radius: 5px;
 }

</style>