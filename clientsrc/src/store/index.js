import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from '../router/index'

Vue.use(Vuex)

//Allows axios to work locally or live
let base = window.location.host.includes('localhost') ? '//localhost:3000/' : '/'

let _api = Axios.create({
  baseURL: base + "api/",
  timeout: 3000,
  withCredentials: true
})

const googleApi = Axios.create({
  baseURL: "https://www.googleapis.com/books/v1/volumes?q=",
  timeout: 3000
});

export default new Vuex.Store({
  state: {
    user: {},
    searchResults: [],
    activeBook: {}
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setActiveBook(state, id) {
     let found = state.searchResults.find(b => b.id == id)
     state.activeBook = found
    }
  },
  actions: {
    //#region -- AUTH STUFF --
    setBearer({ }, bearer) {
      _api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      _api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await _api.get("/profile")
        commit("setUser", res.data)
      } catch (err) {
        console.error(err)
      }
    },

    async deleteFromServer({commit, dispatch}, books){
      let res = await _api.delete("")
      dispatch("postToServer", books)
    },
    async postToServer({commit, dispatch}, books){
      let res = await _api.post("/results", books)
      dispatch("getFromServer")
    },
    async getFromServer({commit, dispatch}){
      let res = await _api.get("/results")
    },

    async getActiveBook({commit, dispatch}, id){
      commit("setActiveBook", id)
    }
  }
    //#endregion


  
})
