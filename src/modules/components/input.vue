<template>
  <div class="form">
    <form @submit.prevent="addTodo(todo)">
      <input v-model="todo.state" type="checkbox"/>
      <input v-model.trim="todo.text" :class="{'line': todo.state}" type="text" placeholder="Create a new todo..."/>
    </form>
  </div>
</template>

<script>
 import useTodos from '../composables/useTodo'
 
 export default {
   setup() {
     const {todo, addTodo} = useTodos()
     return { todo, addTodo }
   }
 }
</script>

<style>
</style>
