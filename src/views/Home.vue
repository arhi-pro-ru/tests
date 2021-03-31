<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/maintenance.svg">
    <HelloWorld msg="Добро пожаловать в проект тестирования созданный на прекрасном Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
