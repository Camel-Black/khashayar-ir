import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    delta :undefined
  },
  mutations: {
    setDelta(state,payload){
      state.delta = payload
    }
  },
  actions: {

  },
  modules: {
  },
  getters:{
    delta: state => state.delta
  }
})