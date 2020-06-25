<template>
  <div class="order container">
    <div class="row">
      <div class="col-6 col-md-3 mx-auto mt-5 rounded-pill shadow border border-primary text-center text-primary">
        <h3>Order</h3>
      </div>
    </div>
    
    <div class="row mt-3">
      <div class="col-12 shadow">
                        <div class="row bg-gradient-light py-2" v-if="removeItemForm">
                  <div class="col-6 mx-auto">
                    <form class="form-inline">
                      <div class="form-group">
                        
                        <input type="number" name="" id="" class="form-control" placeholder="Remove How Many?" aria-describedby="helpId" v-model.number="removeQuantity">
                        
                      </div>
                      <div class="row">
                        <div class="col-12 mx-auto">
                          <button class="btn btn-outline-danger ml-1">Remove All</button>
                          <button class="btn btn-outline-primary ">Remove</button>
                          <button class="btn btn-outline-primary " @click="removeItemForm = false">Cancel</button>
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
          <div class="col-1 pt-2 ">
            <h5 class="text-left">Remove</h5>
          </div>
        </div>

        <div class="row orderContents">
          <div class="col-12">


            <div v-for="book in cart" :key="book.id" :bookProp="book">             
                <div class="row border-bottom border-dark bg-light">
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
                    <h5 v-if="book.price">{{book.price.amount.toFixed(2)}}</h5>
                    <h5 v-else>No Price Given</h5>
                     </router-link>
                  </div>
                  <div class="col-2 pt-2 border-right border-dark text-right">
                     <router-link :to="{name: 'bookDetails', params: {bookId: book.id}}">
                    <h5 v-if="book.price">{{(book.price.amount * book.orderQuantity).toFixed(2)}}</h5>
                    <h5 v-else class="text-center">-------</h5>
                     </router-link>
                  </div>
                  <div class="col-1 pt-2 text-center">
                    <i class="fas fa-trash-alt text-danger pointer" @click=" removeItemForm = true"></i>
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
          <h5>total quantity</h5>
        </div>
        <div class="col-4 pt-2 bg-info text-right border-bottom border-right border-dark">
          <h5>total cost</h5>
        </div>
        </div>
      </div>
    </div>

    <button type="button" class=" mt-3 mb-3 btn btn-primary float-right">CONFIRM ORDER</button>


  </div>
</template>

<script>
export default {
  name: "order",
  data(){
    return{
      removeItemForm : false,
    }
  },
    computed: {
      cart(){
        return this.$store.state.orderCart
      }
    },
    mounted(){
      // this.$store.dispatch("getCart")
    },
    methods: {
      removeFromCart(id){
        this.$store.dispatch("removeFromCart", id)
      }
    }
  }



</script>
<style scoped>
*{
  font-family: 'Ubuntu', sans-serif;
}
.orderContents{
  max-height: 45vh;
  overflow-y: scroll;
  overflow-x: hidden;
}
.pointer{
  cursor: pointer;
}
</style>