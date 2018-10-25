<template>
  <sui-container text-align="center">
    <sui-list class="filter" bulleted horizontal>
      <a is="sui-list-item" @click="filterVal = 'All'">All</a>
      <a is="sui-list-item" @click="filterVal = 'Todo'">Todo</a>
      <a is="sui-list-item" @click="filterVal = 'Done'">Done</a>
    </sui-list>
  </sui-container>
</template>

<script>
export default {
  props: {
    criteria: String,
  },
  data () {
    return { filterVal: this.value }
  },
  watch: {
    filterVal (val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .filter
    font-size 20px
    font-weight bold
    margin-top 25px !important
</style>
