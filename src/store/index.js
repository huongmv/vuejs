import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Constants from '../common/Constants'
Vue.use(Vuex)

const CHANGE_COUNTRY = 'countryChange'
export default new Vuex.Store({
  state: {
      status: '',
      token: localStorage.getItem('token') || '',
      user : {},
      countryChange: localStorage.getItem('countryChange') || ''
  },
  mutations: {
      auth_request(state){
          state.status = 'loading'
      },
      auth_success(state, token, user){
          state.status = 'success'
          state.token = token
          state.user = user
      },
      auth_error(state){
          state.status = 'error'
      },
      logout(state){
          state.status = ''
          state.token = ''
      },
      CHANGE_COUNTRY(state) {
          state.countryChange = localStorage.getItem('countryChange') || ''
      }
  },
  actions: {
      login({commit}, user){
          return new Promise((resolve, reject) => {
              commit('auth_request')
              axios({url: Constants.URL_API + '/userLogin', data: user, method: 'POST' })
                  .then(resp => {
                      console.log(resp)
                      const token = resp.data.token
                      const user = resp.data.user
                      localStorage.setItem('token', token)
                      axios.defaults.headers.common['Authorization'] = token
                      commit('auth_success', token, user)
                      resolve(resp)
                  })
                  .catch(err => {
                      commit('auth_error')
                      localStorage.removeItem('token')
                      reject(err)
                  })
          })
      },
      changeCountry({commit}) {
        commit(CHANGE_COUNTRY)
      },
      register({commit}, user){
          console.log('register')
          return new Promise((resolve, reject) => {
              commit('auth_request')
              axios({url: 'http://localhost:3000/register', data: user, method: 'POST' })
                  .then(resp => {
                      const token = resp.data.token
                      const user = resp.data.user
                      localStorage.setItem('token', token)
                      axios.defaults.headers.common['Authorization'] = token
                      commit('auth_success', token, user)
                      resolve(resp)
                  })
                  .catch(err => {
                      commit('auth_error', err)
                      localStorage.removeItem('token')
                      reject(err)
                  })
          })
      },
      logout({commit}){
          console.log('logout')
          return new Promise((resolve, reject) => {
              commit('logout')
              localStorage.removeItem('token')
              delete axios.defaults.headers.common['Authorization']
              resolve()
          })
      }
  },
  modules: {
  },
    getters : {
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status,
        countryChange: state => state.countryChange
    }
})
