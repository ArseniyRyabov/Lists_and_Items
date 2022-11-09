import { createStore } from 'vuex'

export default createStore({
  state:{
    item1: {
      color: "#ffffff",
      number: 0,
    },
    item2: {
      color: "#ffffff",
      number: 0,
    },
    item3: {
      color3: "#ffffff",
      number3: 0,
    },
    item4: {
      color4: "#ffffff",
      number4: 0,
    },
  },
  getters: {
    ITEM1(state){
      return state.item1
    },
    ITEM2(state){
      return state.item2
    },
  },
  mutations: {
    updateColor1:(state, color1) => {
      state.item1.color = color1;
    },
    updateNumber1:(state, number1) => {
      state.item1.number = number1;
    },
    updateColor2:(state, color2) => {
      state.item2.color = color2;
    },
    updateNumber2:(state, number2) => {
      state.item2.number = number2;
    },
    
  },
  actions: {
  },
  modules: {
  }
})
