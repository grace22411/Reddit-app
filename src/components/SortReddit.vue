<template>
  <div>
      Sort Reddits
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
        padding: 6px;
        border: #3D5AF1 1px solid;
    }
</style>