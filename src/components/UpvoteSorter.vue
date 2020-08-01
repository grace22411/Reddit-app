<template>
  <div>
      Sort Reddits bu Upvotes
      <select @change="sortRedditByUpvote($event)"> 
          <option value="0"> Default </option>
          <option value="1">   Ascending </option>
          <option value="2">  Descending </option>

      </select>
  </div>
</template>

<script>
import { mapActions } from "vuex"; 
export default {
    name : "UpvoteSorter",
    methods: { 
        ...mapActions(['sortRedditByUpvote'])
    },
}
</script>

<style lang="scss" scoped>
    select{
        margin-bottom:15px;
        margin-top: 5px;
        padding: 6px;
        width:100%;
        border: #b0b0b0 1px solid;
    }
</style>