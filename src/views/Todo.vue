<template>
  <div class="todo-box">
    <sui-container>
      <sui-header size="huge" text-align="center">Todo App</sui-header>
      <sui-divider section />
      <InputTodo :handleAddTodo="handleAddTodo" :todoInput="todoInput" @input="todoInput = $event" />
      <FilterTodo v-model="criteria" />
      <ListTodo :toggleTodo="toggleTodo" :filterTodo="filterTodo" />
    </sui-container>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import InputTodo from '../components/Todo/Input'
import FilterTodo from '../components/Todo/Filter'
import ListTodo from '../components/Todo/List'

export default {
  computed: {
    ...mapState({
      todoList: state => state.todo.todoList,
    }),
    ...mapGetters('todo', [
      'filterTodo',
    ]),
    filterTodo: function () {
      return this.$store.getters['todo/filterTodo'](this.criteria)
    },
  },
  created () {
    this.$store.dispatch('todo/getAllTodoList')
  },
  data () {
    return {
      todoInput: '',
      criteria: 'All',
    }
  },
  methods: {
    ...mapActions('todo', [
      'getAllTodoList',
      'toggleTodo',
      'addTodo',
    ]),
    handleAddTodo: async function () {
      if (this.todoInput) {
        await this.$store.dispatch('todo/addTodo', {
          task: this.todoInput
        })
        this.todoInput = ''
      }
    },
    toggleTodo: function (id) {
      this.$store.dispatch('todo/toggleTodo', {
        id
      })
    },
  },
  components: {
    InputTodo,
    FilterTodo,
    ListTodo,
  },
}

</script>
