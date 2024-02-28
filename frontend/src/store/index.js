import { createStore } from 'vuex'
const Mutations = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
}
export default createStore({
  state: {
    count: 5
  },
  getters: {
  },
  mutations: {
    [Mutations.INCREMENT] (state) {
      state.count++
    },
    [Mutations.DECREMENT] (state) {
      state.count--
    }
  },
  actions: {
    increment({commit}){
      commit(Mutations.INCREMENT)
    },
    decrement({commit}){
      commit(Mutations.DECREMENT)
    }
  }
})
