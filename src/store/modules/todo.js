const state = {
  todoList: []
}

// getters
const getters = {
  filterTodo: (state) => (criteria) => {
    return state.todoList.filter(todo => {
      switch (criteria) {
        case 'Todo':
          return !todo.isDone
        case 'Done':
          return todo.isDone
        default:
          return todo
      }
    })
  },
}

// actions
const actions = {
  getAllTodoList ({ commit }) {
    const todoMock = { id: 1, task: 'test mock todo', isDone: false }
    const isAdded = state.todoList.find(todo => todo.id === 1)
    if (!isAdded) commit('setTodoListMock', todoMock)
  },
  toggleTodo ({ commit }, params) {
    commit('toggleTodo', params.id)
  },
  addTodo ({ commit }, params) {
    commit('addTodo', params.task)
  },
}

// mutations
const mutations = {
  setTodoListMock (state, todoMock) {
    state.todoList.push(todoMock)
  },
  toggleTodo (state, id) {
    const res = state.todoList.find(todo => todo.id === id)
    res.isDone = !res.isDone
  },
  addTodo (state, task) {
    const { todoList } = state
    let lastId = todoList[todoList.length - 1].id
    const todoModel = { id: ++lastId, task, isDone: false }
    state.todoList.push(todoModel)
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
