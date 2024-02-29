import { createStore } from 'vuex'
const Mutations = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
}
export default createStore({
  state: {
    countHome: 0,
    countAbout: 0
  },
  getters: {
  },
  mutations: {
    [Mutations.INCREMENT] (state, type) {
      type === 'countHome' ? state.countHome++ : state.countAbout++
    },
    [Mutations.DECREMENT] (state, type) {
      if(state.count === 0) return
      type === 'countHome' ? state.countHome-- : state.countAbout--
    }
  },
  actions: {
    increment({commit}, type){
      commit(Mutations.INCREMENT, type)
    },
    decrement({commit}, type){
      commit(Mutations.DECREMENT, type)
    },
    async fetchPassengers(){
      return ([{name: "Hilla", id: 1}, {name:"Afe", id: 2}]);
    }
    
  }
})
