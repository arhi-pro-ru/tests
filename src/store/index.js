import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0
  },
  mutations: {
	Ecounter: state => state.E++,
	Icounter: state => state.I++,
	Scounter: state => state.S++,
	Ncounter: state => state.N++,
	Tcounter: state => state.T++,
	Fcounter: state => state.F++,
	Jcounter: state => state.J++,
	Pcounter: state => state.P++,
  },
  getters: {
  },
  actions: {
  },
  modules: {
  }
})
