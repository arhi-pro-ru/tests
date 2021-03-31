<template>
  <div>
    <h1>Вопрос 8 из 70</h1>
    <h3>
		В компании и на вечеринке Вы остаетесь допоздна, не чувствуя усталости или быстро утомляетесь и предпочитаете пораньше уйти.
    </h3>
	<button @click.once="Ecounter">
      <h2>
		<router-link to="/Question9of70">
			Я остаюсь допоздна, не чувствуя усталости
		</router-link>
      </h2>
    </button>
	<button @click.once="Icounter">
      <h2>
		<router-link to="/Question9of70">
			Я быстро утомляюсь и предпочитаете пораньше уйти
		</router-link>
      </h2>
    </button>
  </div>
</template>

<script>
export default {  
  computed: {
    E () { return this.$store.state.E },
    I () { return this.$store.state.I },
    S () { return this.$store.state.S },
    N () { return this.$store.state.N },
    T () { return this.$store.state.T },
    F () { return this.$store.state.F },
    J () { return this.$store.state.J },
    P () { return this.$store.state.P },
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
