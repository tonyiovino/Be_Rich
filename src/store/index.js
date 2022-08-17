import { createStore } from 'vuex'

import money from './modules/money'
import car_garage from './modules/car_garage'

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    money,
    car_garage
  }
});