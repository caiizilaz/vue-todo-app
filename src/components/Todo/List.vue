<template>
  <sui-list text-align="left">
    <sui-list-item v-for="todo in filterTodo"
      :key="todo.id"
      @click="toggleTodo(todo.id)">
      <sui-list-icon v-if="todo.isDone" name="check circle" color="green" />
      <sui-list-icon v-else name="circle notch" color="orange" />
      <sui-list-content>
        <a is="sui-list-header">
          {{todo.task}}
        </a>
      </sui-list-content>
    </sui-list-item>
  </sui-list>
</template>

<script>
export default {
  props: {
    toggleTodo: Function,
    filterTodo: Array,
  },
}
</script>
