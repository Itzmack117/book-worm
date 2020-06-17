<template>
  <div class="inventory container">
    <div class="row mt-5">
      <div class="col-6 shadow mx-auto bg-secondary border border-primary text-primary rounded-pill">
        <h3 class="pt-1">Books On Hand</h3>
      </div>
    </div>

  <div class="row mt-3">
    <div class="col-12 shadow">

    
    <div class="row border-bottom border-dark bg-light">
      <div class="col-3 pt-2 text-left">
        <h6>ISBN</h6>
      </div>
      <div class="col-5 pt-2 text-left">
        <h6>Book Title</h6>
      </div>
      <div class="col-2 pt-2 text-center">
        <h6>Quantity</h6>
      </div>
      <div class="col-2 pt-2 text-center">
        <h6>Cost ($)</h6>
      </div>
    </div> <!--NOTE END OF TABLE HEADER -->

      <div class="row border-bottom border-dark bg-info">
      <div class="col-3 pt-2 text-left border-right border-dark">
        <h6>0440335701</h6>
      </div>
      <div class="col-5 pt-2 border-right border-dark text-left">
        <h6>The Google Story</h6>
      </div>
      <div class="col-2 pt-2 text-center border-right border-dark">
        <h6>42069</h6>
      </div>
      <div class="col-2 pt-2 text-center">
        <h6>13.37</h6>
      </div>
    </div>
          <div class="row border-bottom border-dark bg-light">
      <div class="col-3 pt-2 text-left border-right border-dark">
        <h6>0440335701</h6>
      </div>
      <div class="col-5 pt-2 border-right border-dark text-left">
        <h6>Diary of a Wimpy Kid 2</h6>
      </div>
      <div class="col-2 pt-2 text-center border-right border-dark">
        <h6>21</h6>
      </div>
      <div class="col-2 pt-2 text-center">
        <h6>10.99</h6>
      </div>
    </div>
          <div class="row border-bottom border-dark bg-info">
      <div class="col-3 pt-2 text-left border-right border-dark">
        <h6>1</h6>
      </div>
      <div class="col-5 pt-2 border-right border-dark text-left">
        <h6>The Bootstrap Bible</h6>
      </div>
      <div class="col-2 pt-2 text-center border-right border-dark">
        <h6>1</h6>
      </div>
      <div class="col-2 pt-2 text-center">
        <h6>69.00</h6>
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
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
*{
  font-family: 'Ubuntu', sans-serif;
}


.text-left{
  text-align: left;
}
</style>