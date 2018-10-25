<template>
  <div class="todo-box">
    <sui-container>
      <sui-header size="huge" text-align="center">Todo App</sui-header>
      <sui-divider section />
      <sui-grid :columns="2">
        <sui-grid-row>
          <sui-grid-column text-align="right">
            <sui-input v-model="todoInput" placeholder="Memo here" @keyup.enter="handleAddTodo" />
          </sui-grid-column>
          <sui-grid-column text-align="left">
            <sui-button primary @click="handleAddTodo">Add</sui-button>
          </sui-grid-column>
        </sui-grid-row>
      </sui-grid>
      <sui-container text-align="center">
        <sui-list class="filter" bulleted horizontal>
          <a is="sui-list-item" @click="criteria = 'All'">All</a>
          <a is="sui-list-item" @click="criteria = 'Todo'">Todo</a>
          <a is="sui-list-item" @click="criteria = 'Done'">Done</a>
        </sui-list>
      </sui-container>
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
    </sui-container>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
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
      await this.$store.dispatch('todo/addTodo', {
        task: this.todoInput
      })
      this.todoInput = ''
    },
    toggleTodo: function (id) {
      this.$store.dispatch('todo/toggleTodo', {
        id
      })
    },
  },
}

</script>

<style lang="stylus" scoped>
  .filter
    font-size 20px
    font-weight bold
    margin-top 25px !important
</style>
