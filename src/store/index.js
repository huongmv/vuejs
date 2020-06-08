import Vue from 'vue'
import Vuex from 'vuex'
import { SET_OPEN_LOGIN_DIALOG, OPEN_LOGIN_DIALOG, CHANGE_COUNTRY } from './ActionStore'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      isOpenLoginDialog: false,
      isLoggedIn: false,
      token: '',
      countryChange: 'en'
  },
  mutations: {
      [OPEN_LOGIN_DIALOG] (state, isOpenLoginDialog) {
          state.isOpenLoginDialog = isOpenLoginDialog
      },
      CHANGE_COUNTRY(state, data) {
          state.countryChange = data || 'en'
      },
      setLogin (state, data) {
          state.isLoggedIn = data || false
      }
  },
  actions: {
      [SET_OPEN_LOGIN_DIALOG] (context, isOpenLoginDialog) {
          context.commit(OPEN_LOGIN_DIALOG, isOpenLoginDialog)
      },
      changeCountry({commit}) {
        commit(CHANGE_COUNTRY)
      },
      setLogin({commit}) {
          commit('isLoggedIn')
      }
  },
  modules: {
  },
  getters : {
      isOpenLoginDialog (state) {
          return state.isOpenLoginDialog
      },
      countryChange: state => state.countryChange,
      isLoggedIn: state => !!state.isLoggedIn,
  }
})
