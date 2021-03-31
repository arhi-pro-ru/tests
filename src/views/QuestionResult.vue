<template>
  <div>
    <img alt="проект тестирования" src="../assets/arhi-pro-logo.svg">
    <H1>Ваш результат</H1>
    <h2>
      {{this.$store.state.E}}/{{this.$store.state.I}}-{{this.$store.state.S}}/{{this.$store.state.N}}-{{this.$store.state.T}}/{{this.$store.state.F}}-{{this.$store.state.J}}/{{this.$store.state.P}}
    </h2>
    <h1>{{addListResult}}</h1>
    <section v-if="addListResult === 'STOP'">
      <p>Что-то не сработало.</p>
      <p>Или Вы обновили страницу, или нечто сломалось.</p>
      <p>Вы можете использовать серверную версию.</p>
      <p>Вы можете самостоятельно доработать исходный код.</p>
      <p>Этот функионал разработан с заботой<br>о сохранении вашей конфиденциальной информации в тайне<br>и не сохраняет ваши ответы<br>даже на период опроса.</p>
    <button>
      <h1><router-link to="/about">Пройти опрос снова!</router-link></h1>
    </button>

    </section>
    <ISTP v-if="addListResult === 'ISTP'" /> <!--   -->
    <ISTJ v-if="addListResult === 'ISTJ'" /><!--   -->
    <ISFP v-if="addListResult === 'ISFP'" /> <!--   -->
    <ISFJ v-if="addListResult === 'INTP'" /> <!--   -->
    <INTP v-if="addListResult === 'INTP'" /> <!--   -->
    <INTJ v-if="addListResult === 'INTJ'" /> <!--   -->
    <INFP v-if="addListResult === 'INFP'" /> <!--   -->
    <INFJ v-if="addListResult === 'INFJ'" /> <!--   -->
    <ESTP v-if="addListResult === 'ESTP'" /> <!--   -->
    <ESTJ v-if="addListResult === 'ESTJ'" /> <!--   -->
    <ESFP v-if="addListResult === 'ESFP'" /> <!--   -->
    <ENTP v-if="addListResult === 'ENTP'" /> <!-- ENTP  -->
    <ESFJ v-if="addListResult === 'ESFJ'" /> <!-- ESFJ  -->
    <ENTJ v-if="addListResult === 'ENTJ'" /> <!-- ENTJ  -->
    <ENFP v-if="addListResult === 'ENFP'" /> <!-- ENFP  -->
    <ENFJ v-if="addListResult === 'ENFJ'" /> <!-- ENFJ -->

  </div>
</template>

<script>
import ISTP from '@/views/result/ISTP'
import ISTJ from '@/views/result/ISTJ'
import ISFP from '@/views/result/ISFP'
import ISFJ from '@/views/result/ISFJ'
import INTP from '@/views/result/INTP'
import INTJ from '@/views/result/INTJ'
import INFP from '@/views/result/INFP'
import INFJ from '@/views/result/INFJ'
import ESTP from '@/views/result/ESTP'
import ESTJ from '@/views/result/ESTJ'
import ESFP from '@/views/result/ESFP'
import ESFJ from '@/views/result/ESFJ'
import ENTJ from '@/views/result/ENTJ'
import ENFP from '@/views/result/ENFP'
import ENFJ from '@/views/result/ENFJ'
import ENTP from '@/views/result/ENTP'

export default {
  name: 'QuestionResult',
  components: { ISTP, ISTJ, ISFP, ISFJ, INTP, INTJ, INFP, INFJ, ESTP, ESTJ, ESFP, ESFJ, ENTJ, ENFP, ENFJ, ENTP },
  computed: {
    E () { return this.$store.state.E },
    I () { return this.$store.state.I },
    S () { return this.$store.state.S },
    N () { return this.$store.state.N },
    T () { return this.$store.state.T },
    F () { return this.$store.state.F },
    J () { return this.$store.state.J },
    P () { return this.$store.state.P },
    addListResult () {
      let result = [];
      if ((this.$store.state.E === 0 | this.$store.state.I === 0) || (this.$store.state.S === 0 | this.$store.state.N === 0) || (this.$store.state.T === 0 | this.$store.state.F === 0) || (this.$store.state.J === 0 | this.$store.state.P === 0)) {result.push('STOP')}
      else {
        if (this.$store.state.E>this.$store.state.I) {result.push('E')}
          else {result.push('I')}
        if (this.$store.state.S>this.$store.state.N) {result.push('S')}
          else {result.push('N')}
        if (this.$store.state.T>this.$store.state.F) {result.push('T')}
          else {result.push('F')}
        if (this.$store.state.J>this.$store.state.P) {result.push('J')}
          else {result.push('P')}
      }
      return result.join('')
    }
  },
  methods: {
    Ecounter () { this.$store.commit('Ecounter') },
    Icounter () { this.$store.commit('Icounter') },
    Scounter () { this.$store.commit('Scounter') },
    Ncounter () { this.$store.commit('Ncounter') },
    Tcounter () { this.$store.commit('Tcounter') },
    Fcounter () { this.$store.commit('Fcounter') },
    Jcounter () { this.$store.commit('Jcounter') },
    Pcounter () { this.$store.commit('Pcounter') },
  }
};

</script>