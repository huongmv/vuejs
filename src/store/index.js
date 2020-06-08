import Vue from 'vue'
import Vuex from 'vuex'
import { SET_OPEN_LOGIN_DIALOG, OPEN_LOGIN_DIALOG } from './ActionStore'
Vue.use(Vuex)

const CHANGE_COUNTRY = 'countryChange'
export default new Vuex.Store({
  state: {
      isOpenLoginDialog: false,
      status: '',
      token: localStorage.getItem('token') || '',
      user : {},
      countryChange: localStorage.getItem('countryChange') || ''
  },
  mutations: {
      [OPEN_LOGIN_DIALOG] (state, isOpenLoginDialog) {
          state.isOpenLoginDialog = isOpenLoginDialog
      },
      CHANGE_COUNTRY(state, data) {
          state.countryChange = data || ''
      }
  },
  actions: {
      [SET_OPEN_LOGIN_DIALOG] (context, isOpenLoginDialog) {
          context.commit(OPEN_LOGIN_DIALOG, isOpenLoginDialog)
      },
      changeCountry({commit}) {
        commit(CHANGE_COUNTRY)
      }
  },
  modules: {
  },
  getters : {
      isOpenLoginDialog (state) {
          return state.isOpenLoginDialog
      },
      countryChange: state => state.countryChange
  }
})
