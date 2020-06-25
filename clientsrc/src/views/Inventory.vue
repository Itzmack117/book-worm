<template>
  <div class="inventory container">
    <div class="row mt-5">
      <div class="col-6 shadow mx-auto bg-secondary border border-primary text-primary rounded-pill">
        <h3 class="pt-1">Books On Hand</h3>
      </div>
    </div>

  <div class="row mt-3">
    <div class="col-12 shadow">
    
    <div class="row border-bottom border-dark bg-gradient-primary text-white">
      <div class="col-3 pt-2 text-left">
        <h5>ISBN</h5>
      </div>
      <div class="col-5 pt-2 text-left">
        <h5>Book Title</h5>
      </div>
      <div class="col-2 pt-2 text-center">
        <h5>Quantity</h5>
      </div>
      <div class="col-2 pt-2 text-center">
        <h5>Cost ($)</h5>
      </div>
    </div> 

      <div class="row border-bottom border-dark bg-info" v-for="book in books" :key="book" :bookProp="book">
      <div class="col-3 pt-2 text-left border-right border-dark">
        <p>{{book.ISBN}}</p>
      </div>
      <div class="col-5 pt-2 border-right border-dark text-left">
        <p>{{book.title}}</p>
      </div>
      <div class="col-2 pt-2 text-right border-right border-dark">
        <p>{{book.quantity}}</p>
      </div>
      <div class="col-2 pt-2 text-right">
        <p>{{book.price}}</p>
      </div>
    </div>
     </div>
  </div>     
</div>

</template>


<script>
export default {
  name: "inventory",
  data() {
    return {};
  },
  computed: {
    books() {
      return this.$store.state.books
    }
  },
  methods: {},
  components: {},
  mounted() {
    this.$store.dispatch("getBooks")
  }
};
</script>


<style scoped>
*{
  font-family: 'Ubuntu', sans-serif;
}


.text-left{
  text-align: left;
}
.text-right{
  text-align: right;
}
</style>