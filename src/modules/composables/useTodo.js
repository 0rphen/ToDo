import { inject, ref, computed } from 'vue'
import { fType } from '../utils/utils'

const useTodo = () => {
  const todos = inject('todos')
  const filter = inject('filter')
  const getTodos = computed(() => {
    if (filter.value == fType.completed) return todos.value.filter(todo => todo.state)
    if (filter.value == fType.active) return todos.value.filter(todo => !todo.state)
    return todos.value
  })
  const defaultTodo = { text: '', state: false, id: null }
  const todo = ref({ ...defaultTodo })
  const resetTodo = () => todo.value = { ...defaultTodo }
  const addTodo = (todo) => {
    if (!todo.text) return
    todos.value.push({ ...todo, id: new Date().getTime() })
    resetTodo()
  }
  const completedTodos = computed(() => todos.value.filter(todo => !todo.state))
  const clearTodos = () => todos.value = todos.value.filter(todo => !todo.state)
  const deleteTodo = (id) => todos.value = todos.value.filter(todo => todo.id != id)
  return {
    getTodos,
    todo,
    addTodo,
    completedTodos,
    clearTodos,
    deleteTodo,
  }
}

export default useTodo
