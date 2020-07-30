<template>
    <div class="app">

    <AppNavigation />
    <router-view></router-view>
    </div>
</template>

<script>
import AppNavigation from "@/components/AppNavigation"

export default {
    name: 'App',
     components :{
        AppNavigation
    },
    
};
</script>

<style lang="scss">
 *{
   box-sizing:border-box;
 }
  body{
    width:100%;
    height:100%;
    background-color: #FCFCFC;
    padding:0;
    margin:0;
  }
  .app{
     background-color: #FCFCFC;
  }
</style>
