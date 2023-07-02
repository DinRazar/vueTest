<template>
  <MyNavbar></MyNavbar>
  <div id="app"></div>
  <div>
    <router-view/>
  </div>
</template>

<script>
import MyNavbar from "@/components/MyNavbar.vue"
export default{
  components:{
    MyNavbar
  }
}
</script>


<style>
*{
  background-color: #6C76C1 ;
}
</style>