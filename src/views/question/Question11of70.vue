<template>
  <div>
    <h1>Вопрос 11 из 70</h1>
    <h3>
		Оценивая поступки людей, Вы больше учитываете требования закона, чем обстоятельства или обстоятельства, чем требования закона.
    </h3>
	<button @click.once="Tcounter">
      <h2>
		<router-link to="/Question12of70">
			Я больше учитываю требования закона, чем обстоятельства
		</router-link>
      </h2>
    </button>
	<button @click.once="Fcounter">
      <h2>
		<router-link to="/Question12of70">
			Я больше учитываю обстоятельства, чем требования закона
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
