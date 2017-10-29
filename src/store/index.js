import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        Name:"11",
        Email:"22",
        Complaint:"33",
        Suggestions:""
    },
    actions: {
        SET_NAME: function ({ commit }, name) {
            commit('SET_NAME', { name: name })
        },
        SET_EMAIL: function ({ commit }, email) {
            commit('SET_EMAIL', { email: email })
        },
        SET_COMPLAINT: function ({ commit }, complaint) {
            commit('SET_COMPLAINT', { complaint: complaint })
        },
        SET_SUGGESTIONS: function ({ commit }, suggestions) {
            commit('SET_SUGGESTIONS', { suggestions: suggestions })
        }
    },
    mutations: {
        SET_NAME: (state, { name }) => {
            state.Name = name
          },
          SET_EMAIL: (state, { email }) => {
            state.Email = email
          },
          SET_COMPLAINT: (state, { complaint }) => {
            state.Complaint = complaint
          },
          SET_SUGGESTIONS: (state, { suggestions }) => {
            state.Suggestions = suggestions
          }
    },
    getters: {
        Name: state => {
            return state.Name
          },
          Email: state => {
            return state.Email
          },
          Complaint: state => {
            return state.Complaint
          },
          Suggestions: state => {
            return state.Suggestions
          }
    }
  })
  export default store
  