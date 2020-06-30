<template>
  <div class="invoice container">
    <div class="row mt-5 mb-0">
      <div class="col-6 mx-auto bg-secondary text-primary">
        <h1 class="pt-1">Dicks out For Harambe</h1>
        <div class="row">
          <div class="col-8 mx-auto border-bottom border-dark">

          </div>
        </div>
      </div>
    </div>

    <div class="row mt-2">
      <div class="col-12 shadow">
        <div class="row bg-gradient-light py-2" v-if="removeItemForm">
          <div class="col mx-auto">
            <form class="form-inline" @submit.prevent="editSaleQuantity">
              <div class="form-group">
                <h4 class="mr-5 mt-2">{{this.bookToDelete.title}}</h4>
                <input min="0" type="number" class="form-control" placeholder="Remove How Many?" v-model.number="removeQuantity">
              </div>
              <div class="row">
                <div class="col-12 mx-auto">
                  <button class="btn btn-outline-danger ml-1">Remove All</button>
                  <button class="btn btn-outline-primary" type="submit">Remove</button>
                  <button class="btn btn-outline-primary" type="button" @click="this.bookToDelete = {}; removeItemForm = false">Cancel</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="row border-bottom border-dark bg-gradient-primary text-white">
          <div class="col-2 pt-2 text-left">
            <h5>ISBN</h5>
          </div>
          <div class="col-4 pt-2 text-left">
            <h5>Book Title</h5>
          </div>
          <div class="col-1 pt-2 text-center">
            <h5>Quantiddies</h5>
          </div>
          <div class="col-2 pt-2 text-center">
            <h5>How many $</h5>
          </div>
          <div class="col-2 pt-2 text-center">
            <h5>Total tiddy</h5>
          </div>
          <div class="col-1 pt-2">
            <h5 class="text-left">Remove</h5>
          </div>
        </div>

        <div class="row invoiceContents">
          <div class="col-12">
            <div v-for="book in invoice" :key="book.id" :bookProp="book">
              <div class="row border-bottom border-dark bg-light" v-if="book.saleQuantity > 0"> <!--  -->
                <div class="col-2 border-right border-dark pt-2 text-left">
                     <router-link :to="{name: 'bookDetails', params: {bookId: book.id}}">
                    <h5 v-if="book.ISBN">{{book.ISBN}}</h5>
                    <h5 v-else>ISBN Not Given</h5>
                    </router-link>
                  </div>
                  <div class="col-4 border-right border-dark pt-2 text-left">
                     <router-link :to="{name: 'bookDetails', params: {bookId: book.id}}">
                    <h5 v-if="book.title">{{book.title}}</h5>
                    <h5 v-else>No Title Given</h5>
                    </router-link>
                  </div>
                  <div class="col-1 border-right border-dark pt-2 text-right">
                     <router-link :to="{name: 'bookDetails', params: {bookId: book.id}}">
                    <h5 v-if="book.saleQuantity">{{book.saleQuantity}}</h5>
                    <h5 v-else>N/A</h5>
                     </router-link>
                  </div>
                  <div class="col-2 border-right border-dark pt-2 text-right">
                     <router-link :to="{name: 'bookDetails', params: {bookId: book.id}}">
                    <h5 v-if="book.price">{{book.price.toFixed(2)}}</h5>
                    <h5 v-else>No Price Given</h5>
                     </router-link>
                  </div>
                  <div class="col-2 pt-2 border-right border-dark text-right">
                     <router-link :to="{name: 'bookDetails', params: {bookId: book.id}}">
                    <h5 v-if="book.price">{{(book.price * book.saleQuantity).toFixed(2)}}</h5>
                    <h5 v-else class="text-center">-------</h5>
                     </router-link>
                  </div>
                  <div class="col-1 pt-2 text-center">
                    <i class="fas fa-trash-alt text-danger pointer" @click="removeItemForm= true; setForRemove(book)"></i>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-4">
      <div class="offset-6 col-6">
        <div class="row border-bottom border-dark bg-gradient-primary text-white">
            <div class="col-6 mt-2 text-center">
              <h5 class="pl-5">Quantity</h5>
            </div>
            <div class="col-6 mt-2 text-center">
              <h5 class="pl-5">Cost ($)</h5>
            </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="offset-3 col-9 ">
        <div class="row">

        <div class="col-4 pt-2 text-right">
          <h5>TOTAL</h5>
        </div>
        <div class="col-4 pt-2 bg-info text-right border-bottom border-right border-dark border-left">
          <h5>{{this.quantity}}</h5>
        </div>
        <div class="col-4 pt-2 bg-info text-right border-bottom border-right border-dark">
          <h5>{{this.cost.toFixed(2)}}</h5>
        </div>
        </div>
      </div>
    </div>
    <button
      type="button"
      class="mt-3 mb-3 btn btn-primary float-right"
      data-toggle="modal"
      data-target="#confirmModal"
          >CONFIRM SALE
    </button>

    <div class="modal" tabindex="-1" role="dialog" id="confirmModal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Confirm Sale</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <h1><i class="fas fa-fire"></i>u wanna sell these bad bois ? <i class="fas fa-fire"></i></h1>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="confirmSale">Submit Sale</button>
            <!-- Make the submimt button close the modal too -->
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  name: "invoice",
  data(){
    return {
      removeItemForm: false,
      bookToDelete: {},
      removeQuantity: 0
    };
  },
  computed: {
    invoice(){
      return this.$store.state.invoice.books
    },
    quantity(){
      return this.$store.state.invoice.quantity
    },
    cost(){
      return this.$store.state.invoice.cost;
    },
    inventory(){
      return this.$store.state.books
    }
  },
  mounted(){
    console.log(this.$store.state.invoice)
    this.$store.dispatch("getSaleQuantity")
    this.$store.dispatch("getSaleCost")
    this.$store.dispatch("getBooks")
  },
  methods: {
    test(){
      console.log("this.bookToDelete")
      console.log(this.bookToDelete)
    },
    editSaleQuantity(){
      let editedBook = {
        quantity: this.removeQuantity,
        book: this.bookToDelete
      };
        debugger
      if(this.bookToDelete.saleQuantity >= this.removeQuantity){
        editedBook.book.saleQuantity -= this.removeQuantity
        this.$store.dispatch("updateInventoryQty", editedBook.book)
      }
      this.$store.dispatch("getSaleQuantity")
      this.$store.dispatch("getSaleCost")
    },
    setForRemove(book){
      this.bookToDelete = this.invoice.find(b => b.id == book.id);
      console.log(this.bookToDelete)
    },
    confirmSale(){
      this.$store.dispatch("getBooks");
      this.invoice.forEach(book => {
        let found = this.inventory.find(b => b.ISBN == book.ISBN);
        if(found){
          found.quantity -= book.saleQuantity
          found.quantity.toFixed(0);
          found.saleQuantity = 0;
          book.saleQuantity = 0;
          this.$store.dispatch("updateInventoryQty", found)
        }
      });
      this.$store.dispatch("clearSale");
      $("#confirmModal").modal("hide");
    }
  }

}
</script>
<style scoped>
* {
  font-family: "Ubuntu", sans-serif;
}
.invoiceContents {
  max-height: 45vh;
  overflow-y: scroll;
  overflow-x: hidden;
}
.pointer {
  cursor: pointer;
}
</style>