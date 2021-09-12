<template>
  <span class="count-filter">{{completedTodos.length}} items left</span>
  <div class="main-filter">
    <a href="#" @click.prevent="filter = fType.all" :class="{'selected':(filter == fType.all)}">All</a>
    <a href="#" @click.prevent="filter = fType.active" :class="{'selected':(filter == fType.active)}">Active</a>
    <a href="#" @click.prevent="filter = fType.completed" :class="{'selected':(filter == fType.completed)}">Completed</a>
  </div>
  <a href="#" @click.prevent="clearTodos" class="clear-filter">Clear Completed</a>
</template>

<script>
 import { inject } from 'vue'

 import useTodo from '../composables/useTodo'
 import { fType } from '../utils/utils'
 
 export default {
   setup() {
     const filter = inject('filter')
     const {completedTodos, clearTodos} = useTodo()
     return {
       completedTodos,
       clearTodos,
       filter,
       fType,
     }
   },
 }
</script>
