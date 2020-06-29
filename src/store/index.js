import Vue from 'vue'
import Vuex from 'vuex'
import { SET_OPEN_LOGIN_DIALOG, OPEN_LOGIN_DIALOG, CHANGE_COUNTRY, SET_OPEN_LOGIN_ADMIN_DIALOG, OPEN_LOGIN_ADMIN_DIALOG, SET_LOGGED_IN, LOGGED_IN } from './ActionStore'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      isOpenLoginDialog: false,
      isOpenLoginAdminDialog: false,
      token: '',
      countryChange: 'en',
      isLoggedIn: false
  },
  mutations: {
      [OPEN_LOGIN_DIALOG] (state, isOpenLoginDialog) {
          state.isOpenLoginDialog = isOpenLoginDialog
      },
      [OPEN_LOGIN_ADMIN_DIALOG] (state, isOpenLoginAdminDialog) {
          state.isOpenLoginAdminDialog = isOpenLoginAdminDialog
      },
      CHANGE_COUNTRY(state, data) {
          state.countryChange = data || 'en'
      },
      [LOGGED_IN] (state, isLoggedIn) {
          state.isLoggedIn = isLoggedIn
      }
  },
  actions: {
      [SET_OPEN_LOGIN_DIALOG] (context, isOpenLoginDialog) {
          context.commit(OPEN_LOGIN_DIALOG, isOpenLoginDialog)
      },
      [SET_OPEN_LOGIN_ADMIN_DIALOG] (context, isOpenLoginAdminDialog) {
          context.commit(OPEN_LOGIN_ADMIN_DIALOG, isOpenLoginAdminDialog)
      },
      changeCountry({commit}) {
        commit(CHANGE_COUNTRY)
      },
      [SET_LOGGED_IN] (context, isLoggedIn) {
          context.commit(LOGGED_IN, isLoggedIn)
      }
  },
  modules: {
  },
  getters : {
      isOpenLoginDialog (state) {
          return state.isOpenLoginDialog
      },
      isOpenLoginAdminDialog (state) {
          return state.isOpenLoginAdminDialog
      },
      countryChange: state => state.countryChange,
      isLoggedIn (state) {
          return state.isLoggedIn
      },
  }
})
