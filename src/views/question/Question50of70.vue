<template>
  <div>
    <h1>Вопрос 50 из 70</h1>
    <h3>
		Общаясь с незнакомыми, Вы легко завязываете продолжительные беседы или не всегда находите общие темы для разговора.
    </h3>
	<button @click.once="Ecounter">
      <h2>
		<router-link to="/Question51of70">
			Я легко завязываю продолжительные беседы
		</router-link>
      </h2>
    </button>
	<button @click.once="Icounter">
      <h2>
		<router-link to="/Question51of70">
			Я не всегда нахожу общие темы для разговора
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
