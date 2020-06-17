<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
      <i class="pb-2 fas fa-book text-white mr-3"></i>
    <router-link class=" navbar-brand text-white" :to="{ name: 'home' }">
    
    <span class="thefont"> 
      <h2>
    Bookworm
      </h2>
    </span>
      
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="thefont nav-item text-white" :class="{ active: $route.name == 'inventory' }">
          <router-link :to="{ name: 'inventory' }" class=" text-white nav-link"
            >Inventory</router-link
          >
        </li>
        <li
          class="thefont nav-item"
          v-if="$auth.isAuthenticated"
          :class="{ active: $route.name == 'boards' }"
        >
          <router-link class="thefont nav-link text-white" :to="{ name: 'order' }"
            >Order Books</router-link
          >
        </li>
      </ul>
      <span class=" navbar-text">
        <button class=" btn btn-info" @click="searchForm = true">Search</button>
        <button
          class=" btn btn-info"
          @click="login"
          v-if="!$auth.isAuthenticated"
        >
          Login
        </button>
        <button class=" btn btn-danger" @click="logout" v-else>logout</button>
      </span>
    </div>
  </nav>
  <div class="row bg-light" v-if="searchForm" > <!-- v-if="searchForm" -->
    <div class="col-8 mx-auto  py-2 ">
      <form class="form-inline d-flex">
        <div class="form-group align-items-center">

          <!-- TODO v-model -->

          <input style="width: 50vw" type="text" name="search" id="search" class=" ml-2 form-control" placeholder="search for book" aria-describedby="helpId">
        </div>
        <button type="submit" class=" mx-2 btn btn-outline-primary"><i class="fas fa-search"></i></button>
        <button @click="searchForm = false" type="button" class="btn btn-danger"><i class="fas fa-times"></i></button>
      </form>
    </div>
  </div>
  
  <div id="search results">

  </div>

  </div>
</template>

<script>
import axios from "axios";

let _api = axios.create({
  baseURL: "https://localhost:3000",
  withCredentials: true
});
export default {
  name: "Navbar",
  data(){
    return{
      searchForm: false,
    }
  },
  methods: {
    async login() {
      await this.$auth.loginWithPopup();
      this.$store.dispatch("setBearer", this.$auth.bearer);
      this.$store.dispatch("getProfile");
      console.log("this.$auth.user: ");
      console.log(this.$auth.user);
    },
    async logout() {
      await this.$auth.logout({returnTo: window.location.origin});
    }
  }
};
</script>

<style scoped>
.thefont{
  font-family: 'Indie Flower', cursive;
}
</style>
