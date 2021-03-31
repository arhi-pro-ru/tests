<template>
  <div class="home">
    <div id="nav">
      <router-link to="/">В начало опросника</router-link> |
      <router-link to="/about">Пройти опрос</router-link>
    </div>
    <img alt="проект тестирования" src="../assets/maintenance.svg">
    <HelloWorld msg="Добро пожаловать!"/>
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
