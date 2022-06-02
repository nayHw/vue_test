<template>
  <div class="container">
    <table class="table table-bordered">
      <thead class="thead-light">
        <tr>
          <th scope="col">#</th>
          <th scope="col" class="w-100">Note</th>
          <th scope="col" colspan="2" class="text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(list,index) in lists" :key="index">
          <th scope="row">{{ index+1 }}</th>
          <td>{{ list }}</td>
          <td class="text-primary click">Edit</td>
          <td class="text-danger click" @click="delItem(index)">Del</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props:['lists'],
  components:{
  },
  methods: {
    delItem(index){
      this.$store.dispatch('delItem',index)
    }
  }
}
</script>
<style>
  .click{
    cursor: pointer;
  }

</style>