<template>
  <div>
    <h1>Вопрос 53 из 70</h1>
    <h3>
		Кто заслуживает большего одобрения рассудительный, здравомыслящий человек или человек, глубоко переживающий.
    </h3>
	<button @click.once="Tcounter">
      <h2>
		<router-link to="/Question54of70">
			рассудительный, здравомыслящий человек
		</router-link>
      </h2>
    </button>
	<button @click.once="Fcounter">
      <h2>
		<router-link to="/Question54of70">
			человек, глубоко переживающий
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
