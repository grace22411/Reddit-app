<template>
  <div>
      Filter Reddits by upvotes
      <select @change="filterReddit($event)"> 
          <option value="50000-500000"> 50k and above </option>
          <option value="20000-50000">   20k - 50k upvotes </option>
          <option value="10000-20000">  10k  - 20k upvotes </option>
          <option value="0-10000">  0 - 10k upvotes </option>

      </select>
  </div>
</template>

<script>
import { mapActions } from "vuex"; 
export default {
    name : "SortReddit",
    methods: { 
        ...mapActions(['filterReddit'])
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