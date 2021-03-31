<template>
  <div>
    <h1>Вопрос 65 из 70</h1>
    <h3>
		В литературных произведениях Вы предпочитаете буквальность, конкретность или образность, переносный смысл.
    </h3>
	<button @click.once="Scounter">
      <h2>
		<router-link to="/Question66of70">
			буквальность и конкретность
		</router-link>
      </h2>
    </button>
	<button @click.once="Ncounter">
      <h2>
		<router-link to="/Question66of70">
			образность и переносный смысл
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
