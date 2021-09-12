<template>
  <ul>
    <draggable :list="getTodos">
      <li v-for="todo of getTodos" :key="todo.id" class="todo">
	<input type="checkbox" v-model="todo.state" />
	<p :class="{'line': todo.state}">{{todo.text}}</p>
	<a href="#" @click.prevent="deleteTodo(todo.id)"><i class="fas fa-times"></i></a>
      </li>
    </draggable>
  </ul>
</template>

<script>
 import {VueDraggableNext} from 'vue-draggable-next'
 import useTodo from '../composables/useTodo'
 
 export default {
   name: 'list',
   components: {
     draggable: VueDraggableNext
   },
   setup() {
     const { getTodos, deleteTodo } = useTodo()
     return { getTodos, deleteTodo }
   },
 }
</script>

<style>
 
</style>
