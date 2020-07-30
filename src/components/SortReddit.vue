<template>
  <div>
      Sort Reddits
      <select @change="filterReddit($event)"> 
          <option value="1000"> 1000+ upvotes </option>
          <option value="1000"> 500+ upvotes </option>
          <option value="1000"> 200+ upvotes </option>
          <option value="1000"> 50+ upvotes </option>

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