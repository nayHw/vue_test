<template>
  <div class="container mt-2">
    <form @submit.prevent="addList(newItem)" @keyupEnter.prevent="addList(newItem)" class="w-50">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Enter text" v-model="newItem" :class="error ? 'error' : ''">
        <button type="submit" class="btn btn-primary form-control mt-2">Add</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data(){
   return{
      newItem: '',
      error:false
   }
  },
  methods:{
    addList(newItem){
      if(newItem){   
        this.$store.dispatch('addList',newItem)
        // this.$store.commit('addList', newItem)
        this.newItem = ''
        this.error = false
      }else{
        this.error = true
      }
    }
  }

}
</script>
<style>
  .error{
    border: 1px solid red !important;
  }
</style>