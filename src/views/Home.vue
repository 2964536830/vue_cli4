<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import api from '@/api/user'
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data(){
    return{
      text:''
    }
  },
  created(){
    this.getData()
  },
  methods:{
    getData(){
      api.singlePoetry()
      .then(res=>{
        console.log(res)
      })
    }
  }
}
</script>
