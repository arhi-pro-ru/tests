<template>
  <div>
    <h1>Вопрос 42 из 70</h1>
    <h3>
		Вы обычно полагаетесь на организованность, порядок или на случайность, неожиданность. 
    </h3>
	<button @click.once="Jcounter">
      <h2>
		<router-link to="/Question43of70">
			организованность и порядок
		</router-link>
      </h2>
    </button>
	<button @click.once="Pcounter">
      <h2>
		<router-link to="/Question43of70">
			случайность и неожиданность
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
