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
    activeBook: {},
    orderCart: [],
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setActiveBook(state, id) {
      state.activeBook = state.searchResults.filter(b => b.id == id).pop()
    },
    searchBooks(state, books) {
      state.searchResults = books.filter(r => r.volumeInfo.industryIdentifiers).map(r => {
        try {
          if (r.volumeInfo.industryIdentifiers[0].identifier) {
            return {
              id: r.id,
              title: r.volumeInfo ? r.volumeInfo.title : "No Title",
              subTitle: r.volumeInfo ? r.volumeInfo.subtitle : "No Subtitle",
              authors: r.volumeInfo ? r.volumeInfo.authors : "",
              ISBN: r.volumeInfo ? r.volumeInfo.industryIdentifiers[0] ? r.volumeInfo.industryIdentifiers[0].identifier : "0" : "1",
              pageCount: r.volumeInfo ? r.volumeInfo.pageCount : "Unknown",
              publisher: r.volumeInfo ? r.volumeInfo.publisher : "Unknown",
              description: r.volumeInfo ? r.volumeInfo.description : "No Description",
              price: r.saleInfo ? r.saleInfo.listPrice : "Not for sale",
              quantity: 0,
              orderQuantity: 0,
              img: r.volumeInfo
                ? r.volumeInfo.imageLinks
                  ? r.volumeInfo.imageLinks.thumbnail : ""
                : ""
            };
          }
        } catch (e) {
          return {
          }
        }
      });
    },

    addToOrder(state, book) {
      let foundBook = state.orderCart.find(b => b.id == book.id)
      if (foundBook) {
        foundBook.orderQuantity += book.orderQuantity
        foundBook.orderQuantity /= 2
      } else {
        state.orderCart.push(book)
      }

      console.log(state.orderCart)
    },
    removeFromCart(state, id) {
      let foundBook = state.orderCart.find(b => b.id == id)
      foundBook.orderQuantity = 0;
      state.orderCart = state.orderCart.filter(b => b.id != id)
    },
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
    async searchBooks({ commit, dispatch }, query) {
      try {
        let res = await googleApi.get("" + query)
        commit("searchBooks", res.data.items)
      } catch (err) {
        console.error(err)
      }
    },

    async deleteFromServer({ commit, dispatch }, books) {
      let res = await _api.delete("")
      dispatch("postToServer", books)
    },
    async postToServer({ commit, dispatch }, books) {
      let res = await _api.post("/results", books)
      dispatch("getFromServer")
    },
    async getFromServer({ commit, dispatch }) {
      let res = await _api.get("/results")
    },

    async getActiveBook({ commit, dispatch }, id) {
      commit("setActiveBook", id)
    },
    async addToOrder({ commit, dispatch }, book) {
      commit("addToOrder", book)
    },
    async removeFromCart({ commit, dispatch }, id) {
      commit("removeFromCart", id)
    }
  }
  //#endregion
})

