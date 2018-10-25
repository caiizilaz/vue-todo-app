<template>
  <sui-grid :columns="2">
    <sui-grid-row>
      <sui-grid-column text-align="right">
        <sui-input
          v-model="inputVal"
          @keyup.enter="handleAddTodo" />
      </sui-grid-column>
      <sui-grid-column text-align="left">
        <sui-button primary @click="handleAddTodo">Add</sui-button>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
export default {
  props: {
    handleAddTodo: Function,
    todoInput: String,
  },
  data () {
    return { inputVal: this.value }
  },
  watch: {
    inputVal (val) {
      this.$emit('input', val)
    },
    todoInput: function (newVal, oldVal) {
      if (!newVal) {
        this.inputVal = newVal
      }
    }
  }
}
</script>
