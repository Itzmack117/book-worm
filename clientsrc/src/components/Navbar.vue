<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
      <i class="pb-2 fas fa-book fa-2x text-white mr-3"></i>
      <router-link class="navbar-brand text-white" :to="{ name: 'home' }">
        <span class="thefont">
          <h2>Bookworm</h2>
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
            <router-link :to="{ name: 'inventory' }" class="text-white nav-link">Inventory</router-link>
          </li>
          <li
            class="thefont nav-item"
            v-if="$auth.isAuthenticated"
            :class="{ active: $route.name == 'boards' }"
          >
            <router-link class="thefont nav-link text-white" :to="{ name: 'order' }">Order Books</router-link>
          </li>
        </ul>
        <span class="navbar-text">
          <button class="btn btn-info" @click="searchForm = true">Order</button>
          <button class="btn btn-info" @click="login" v-if="!$auth.isAuthenticated">Login</button>
          <button class="btn btn-danger" @click="logout" v-else>logout</button>
        </span>
      </div>
    </nav>
    <div class="row bg-light" v-if="searchForm">
      <!-- v-if="searchForm" -->
      <div class="col-10 d-flex flex-column align-items-center mx-auto text-left py-2">
        <small class="pl-3">Search Database For Books To Order</small>
        <form class="form-inline d-flex">
          <div class="form-group align-items-center">
            <!-- TODO v-model -->

            <input
              style="width: 50vw"
              type="text"
              name="search"
              id="search"
              class="ml-2 form-control"
              placeholder="search for book"
              aria-describedby="helpId"
            />
          </div>
          <button type="submit" class="mx-2 btn btn-outline-primary">
            <i class="fas fa-search"></i>
          </button>
          <button @click="searchForm = false" type="button" class="btn btn-danger">
            <i class="fas fa-times"></i>
          </button>
        </form>
      </div>
    </div>

    <div id="results">
      <div v-if="searchForm" class="row bg-light">
        <div class="col-10 mx-auto mb-2">
          <h6>Results</h6>

          <div class="row bg-gradient-primary border-bottom border-primary" id="">
            <div class="col-2 pt-2 text-left text-white">
              <h5>ISBN</h5>
            </div>
            <div class="col-4 pt-2 text-left text-white">
              <h5>Title</h5>
            </div>
            <div class="col-4 pt-2 text-left text-white">
              <h5>Author</h5>
            </div>
            <div class="col-1 pt-2 text-center text-white">
              <h5>Price</h5>
            </div>
            <div class="col-1 pt-2 text-white">
              <h5>Order</h5>
            </div>
          </div>
          <div class="row border-bottom border-primary py-1 bg-info" id="dummydata">
            <div class="col-2 pt-2 text-left">
              <h6>ISBN</h6>
            </div>
            <div class="col-4 pt-2 text-left">
              <h6>Title</h6>
            </div>
            <div class="col-4 pt-2 text-left">
              <h6>Author</h6>
            </div>
            <div class="col-1 pt-2 text-right">
              <h6>Price</h6>
            </div>
            <div class="col-1 text-center">
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-truck"></i></button>
              
            </div>
          </div>
          <div class="row border-bottom border-primary py-1 bg-info" id="dummydata">
            <div class="col-2 pt-2 text-left">
              <h6>ISBN</h6>
            </div>
            <div class="col-4 pt-2 text-left">
              <h6>Title</h6>
            </div>
            <div class="col-4 pt-2 text-left">
              <h6>Author</h6>
            </div>
            <div class="col-1 pt-2 text-right">
              <h6>Price</h6>
            </div>
            <div class="col-1 text-center">
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-truck"></i></button>
              
            </div>
          </div>
          <div class="row border-bottom border-primary py-1 bg-info" id="dummydata">
            <div class="col-2 pt-2 text-left">
              <h6>ISBN</h6>
            </div>
            <div class="col-4 pt-2 text-left">
              <h6>Title</h6>
            </div>
            <div class="col-4 pt-2 text-left">
              <h6>Author</h6>
            </div>
            <div class="col-1 pt-2 text-right">
              <h6>Price</h6>
            </div>
            <div class="col-1 text-center">
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-truck"></i></button>
              
            </div>
          </div>
          <div class="row border-bottom border-primary py-1 bg-info" id="dummydata">
            <div class="col-2 pt-2 text-left">
              <h6>ISBN</h6>
            </div>
            <div class="col-4 pt-2 text-left">
              <h6>Title</h6>
            </div>
            <div class="col-4 pt-2 text-left">
              <h6>Author</h6>
            </div>
            <div class="col-1 pt-2 text-right">
              <h6>Price</h6>
            </div>
            <div class="col-1 text-center">
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-truck"></i></button>
              
            </div>
          </div>
          <div class="row border-bottom border-primary py-1 bg-info" id="dummydata">
            <div class="col-2 pt-2 text-left">
              <h6>ISBN</h6>
            </div>
            <div class="col-4 pt-2 text-left">
              <h6>Title</h6>
            </div>
            <div class="col-4 pt-2 text-left">
              <h6>Author</h6>
            </div>
            <div class="col-1 pt-2 text-right">
              <h6>Price</h6>
            </div>
            <div class="col-1 text-center">
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-truck"></i></button>
              
            </div>
          </div>

          
        </div>
      </div>
    </div>

  <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">How Many Would You Like To Order?</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <form class="form-inline" style="width: 100%">
                    <div class="form-group" style="width: 100%">
                      <input type="number" style="width: 75%" name="" id="" class=" mb-2 form-control" placeholder="quantity" aria-describedby="helpId">
                      <button type="submit" class="mb-2 ml-5 btn btn-light">Order</button>                      
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                  
                </div>
              </div>
            </div>
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
  data() {
    return {
      searchForm: false
    };
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
      await this.$auth.logout({ returnTo: window.location.origin });
    }
  }
};
</script>

<style scoped>
.thefont {
  font-family: "Indie Flower", cursive;
}



#results{
  max-height: 20vh;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
