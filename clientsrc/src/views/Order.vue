<template>
  <div class="order container">
    <div class="row mt-5 mb-0">
      <div class="col-6 mx-auto bg-secondary text-primary">
        <h3 class="pt-1">Order</h3>
        <div class="row">
          <div class="col-8 mx-auto border-bottom border-dark"></div>
        </div>
      </div>
    </div>

    <div class="row mt-2">
      <div class="col-12 shadow">
        <div class="row bg-gradient-light py-2" v-if="removeItemForm">
          <div class="col mx-auto">
            <form class="form-inline" @submit.prevent="editOrderQuantity">
              <div class="form-group">
                <input
                  min="0"
                  type="number"
                  name
                  id
                  class="form-control"
                  placeholder="Remove How Many?"
                  aria-describedby="helpId"
                  v-model.number="removeQuantity"
                />
              </div>
              <div class="row">
                <div class="col-12 mx-auto">
                  <button class="btn btn-outline-danger ml-1">Remove All</button>
                  <button class="btn btn-outline-primary" type="submit">Remove</button>
                  <button
                    class="btn btn-outline-primary"
                    @click="removeQuantity = 0; removeItemForm = false"
                  >Cancel</button>
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
            <h5>Quantity</h5>
          </div>
          <div class="col-2 pt-2 text-center">
            <h5>Cost ($)</h5>
          </div>
          <div class="col-2 pt-2 text-center">
            <h5>Total ($)</h5>
          </div>
          <div class="col-1 pt-2">
            <h5 class="text-left">Remove</h5>
          </div>
        </div>

        <div class="row orderContents">
          <div class="col-12">
            <div v-for="book in cart" :key="book.id" :bookProp="book">
              <div v-if="book.orderQuantity > 0" class="row border-bottom border-dark bg-light">
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
                    <h5 v-if="book.orderQuantity">{{book.orderQuantity}}</h5>
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
                    <h5 v-if="book.price">{{(book.price * book.orderQuantity).toFixed(2)}}</h5>
                    <h5 v-else class="text-center">-------</h5>
                  </router-link>
                </div>
                <div class="col-1 pt-2 text-center">
                  <i
                    class="fas fa-trash-alt text-danger pointer"
                    @click="removeItemForm = true; setForRemove(book)"
                  ></i>
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
      <div class="offset-3 col-9">
        <div class="row">
          <div class="col-4 pt-2 text-right">
            <h5>TOTAL</h5>
          </div>
          <div
            class="col-4 pt-2 bg-info text-right border-bottom border-right border-dark border-left"
          >
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
    >CONFIRM ORDER</button>
    <div class="modal" tabindex="-1" role="dialog" id="confirmModal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Confirm Order</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Would you like to add these books to your inventory?</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="confirmOrder">Submit Order</button>
            <!-- Make the submimt button close the modal too -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "order",
  data() {
    return {
      removeItemForm: false,
      bookToDelete: {},
      removeQuantity: 0
    };
  },
  computed: {
    cart() {
      return this.$store.state.orderCart.books;
    },
    quantity() {
      return this.$store.state.orderCart.quantity;
    },
    cost() {
      return this.$store.state.orderCart.cost;
    },
    inventory() {
      return this.$store.state.books;
    }
  },
  mounted() {
    // this.$store.dispatch("getCart")
    this.$store.dispatch("getOrderQuantity");
    this.$store.dispatch("getOrderCost");
    this.$store.dispatch("getBooks");
  },
  methods: {
    editOrderQuantity() {
      let editedBook = {
        qty: this.removeQuantity,
        book: this.bookToDelete
      };
      if (this.bookToDelete.orderQuantity >= this.removeQuantity) {
        this.$store.dispatch("editOrderQuantity", editedBook);
      }
      this.$store.dispatch("getOrderQuantity");
      this.$store.dispatch("getOrderCost");
    },
    setForRemove(book) {
      this.bookToDelete = this.cart.find(b => b.id == book.id);
    },

    confirmOrder() {
      this.$store.dispatch("getBooks");
      this.cart.forEach(book => {
        let found = this.inventory.find(b => b.ISBN == book.ISBN);
        if (found) {
          found.quantity += book.orderQuantity;
          found.quantity.toFixed(0);
          found.orderQuantity = 0;
          book.orderQuantity = 0;
          this.$store.dispatch("updateInventoryQty", found);
        } else {
          this.$store.dispatch("addToInventory", book);
        }
      });
      this.$store.dispatch("clearOrder");
      $("#confirmModal").modal("hide");
    }
  }
};
</script>
<style scoped>
* {
  font-family: "Ubuntu", sans-serif;
}
.orderContents {
  max-height: 45vh;
  overflow-y: scroll;
  overflow-x: hidden;
}
.pointer {
  cursor: pointer;
}
</style>