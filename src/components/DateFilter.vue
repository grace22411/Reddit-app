<template>
  <div>
      Filter Reddits by Date
      <input @change="filterRedditByDate($event)" type="date"> 
          
  </div>
</template>

<script>
import { mapActions } from "vuex"; 
export default {
    name : "DateFilter",
    methods: { 
        ...mapActions(['filterRedditByDate'])
    },
}
</script>

<style lang="scss" scoped>
    input{
         margin-bottom:15px;
        margin-top: 5px;
        padding: 6px;
        width:100%;
        border: #b0b0b0 1px solid;
    }
</style>