<template>
  <header>
    <h1>ToDo App</h1>
    <menu>
      <li><a href="#" @click.prevent="changeTheme()"><i class="fas fa-moon" v-if="theme"></i><i class="fas fa-sun" v-if="!theme"></i></a></li>
    </menu>
  </header>
</template>

<script>
 import { inject } from 'vue'
 
 export default {
   setup() {
     const theme = inject('theme')
     const changeTheme = () => theme.value = !theme.value
     return {
       theme,
       changeTheme,
     }
   },
 }
</script>
