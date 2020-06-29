<template>
  <div class="inventory container">
    <div class="row mt-5 mb-0">
      <div class="col-6 mx-auto bg-secondary text-primary">
        <h3 class="pt-1">Books On Hand</h3>
        <div class="row">
          <div class="col-8 mx-auto border-bottom border-dark">

          </div>
        </div>
      </div>
    </div>

  <div class="row mt-2">
    <div class="col-12 shadow">
    
 <div class="row bg-gradient-light py-2" v-if="invoiceForm">
                  <div class="col mx-auto">
                    <form class="form-inline" @submit.prevent="addToInvoice">
                      <div class="form-group">
                        
                        <input min="0"  type="number" name="" id="" class="form-control" placeholder="Sell How Many?" aria-describedby="helpId" v-model.number="saleQuantity">
                        
                      </div>
                      <div class="row">
                        <div class="col-12 mx-auto">
                          <button class="btn btn-outline-primary" type="submit">Sell</button>
                          <button class="btn btn-outline-primary" type="button" @click="saleQuantity = 0; invoiceForm = false">Cancel</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div> 




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
      <div class="col-1 pt-2 text-center">
        <h5>Cost ($)</h5>
      </div>
       <div class="col-1 pt-2 text-center">
        <h5>Sell</h5>
      </div>
    </div> 

      <div class="row border-bottom border-dark bg-info" v-for="book in books" :key="book.id" :bookProp="book">
      <div class="col-3 pt-2 text-left border-right border-dark">
        <p>{{book.ISBN}}</p>
      </div>
      <div class="col-5 pt-2 border-right border-dark text-left">
        <p>{{book.title}}</p>
      </div>
      <div class="col-2 pt-2 text-right border-right border-dark">
        <p>{{book.quantity}}</p>
      </div>
      <div class="col-1 pt-2 text-right border-right border-dark">
        <p>{{book.price}}</p>
      </div>
       <div class="col-1 pt-2 text-center">
        <i class="fas fa-shopping-cart text-primary" @click="invoiceForm = true; setToSale(book)"></i>
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
    return {
      invoiceForm: false,
      bookToSell: {},
      saleQuantity: 0
    };
  },
  computed: {
    books() {
      return this.$store.state.books
    }
  },
  methods: {

    setToSale(book){
      this.bookToSell = this.books.find(b => b.id == book.id)
    },

    addToInvoice(){
      
      let editedBook = {quantity: this.saleQuantity, book: this.bookToSell}
      console.log("editedBook:")
      console.log(editedBook)
      if (this.bookToSell.quantity >= this.saleQuantity){
        this.$store.dispatch("addToInvoice", editedBook)
      }
      // this.$store.dispatch("getInvoiceQuantity")
      // this.$store.dispatch("getInvoiceCost")
    },
  },
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