import { createStore } from 'vuex'

import SystemState from '@/store/modules/SystemState';
import { fromJS } from 'immutable';

import _beRich from '@/store/modules/_beRich';

import initialState from '@/store/modules/initialState';

export default createStore({
  state: {
    systemState: new SystemState(fromJS(initialState))
  },
  getters: {
    systemState: (state) => state.systemState,
  },
  mutations: {
    resetState(state) {
      state.systemState = new SystemState(fromJS(initialState));
    },
    commitState(state, nextSystemState) {
      state.systemState.commit(null, nextSystemState);
    },
  },
  actions: {
    addMoney(ctx, payload) {
      const systemState = ctx.getters.systemState;
      const _beRichData = systemState.get();
      const next_beRichData = _beRich.addMoney(_beRichData, payload);
      ctx.commit('commitState', next_beRichData);
    },
  },
  modules: {
  }
})
