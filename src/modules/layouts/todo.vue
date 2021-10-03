<template>
  <div class="main" :class="{'dark':!theme}">
    <Header/>
    <Input/>
    <div class="container" v-if="todos.length > 0"></div>
    <List/>
    <Controls v-if="todos.length > 0"/>
  </div>
</template>

<script>
 import { defineComponent, provide, ref } from 'vue'
 import List from '../components/list.vue'
 import Controls from '../components/controls.vue'
 import Header from '../components/header.vue'
 import Input from '../components/input.vue'
 import { fType, Theme } from '../utils/utils'
 
 export default defineComponent({
   name: 'todo',
   components: { List, Controls, Header, Input },
   setup() {
     const todos = ref([])
     const filter = ref(fType.all)
     const theme = (window.matchMedia('(prefers-color-scheme: dark)'))
       ? ref(Theme.dark)
       : ref(Theme.light)
     provide('todos', todos)
     provide('filter', filter)
     provide('theme', theme)
     return { todos, theme }
   },
 })
</script>

<style>
</style>
