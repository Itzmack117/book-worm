import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from '../router/index'

Vue.use(Vuex)

//Allows axios to work locally or live
let base = window.location.host.includes('localhost') ? '//localhost:3000/' : '/'

let api = Axios.create({
  baseURL: base + "api/",
  timeout: 3000,
  withCredentials: true
})

const googleApi = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/volumes?q=",
  timeout: 3000
});

export default new Vuex.Store({
  state: {
    user: {},
    activeBoard: {},
    searchResults: []
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
   
  },
  actions: {
    //#region -- AUTH STUFF --
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("/profile")
        commit("setUser", res.data)
      } catch (err) {
        console.error(err)
      }
    },
    async searchApi({commit, dispatch}){
     let res = await googleApi.get("" + this.searchApi);   
     dispatch("deleteFromServer", res.data.items)  
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
    }
  }
    //#endregion


  
})
