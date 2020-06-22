<template>
  <div class="BookDetails container">
    <div class="row">
      <div class="col-9 mt-4 mb-2 text-left">
        <span class="titleFont">THE GOOGLE STORY</span>
        <span class="text-danger ml-3">low stock</span>
      </div>
      <div class="col-3 mt-4 mb-2">
        <button type="button" class="btn btn-primary float-right" data-toggle="modal" data-target="#orderModal">Order</button>
      </div>
    </div>
    
    <div class="row bg-light border-bottom border-primary">
      <div class="col-3 pt-1 text-left">
        <h5>ISBN</h5>
      </div>
      <div class="col-3 pt-1">
        <h5>Quantity</h5>
      </div>
      <div class="col-3 pt-1">
        <h5>Cost ($)</h5>
      </div>
      <div class="col-3 pt-1">
        <h5>Value ($)</h5>
      </div>
    </div>
    
    <div class="row bg-info">
      <div class="col-3 py-2 border-right border-primary text-left">
        <h5>0440335701</h5>
      </div>
      <div class="col-3 py-2 border-right border-primary text-right">
        <h5>42069</h5>
      </div>
      <div class="col-3 py-2 border-right border-primary text-right">
        <h5>13.37</h5>
      </div>
      <div class="col-3 py-2 text-right">
        <h5>542432.53</h5>
      </div>
    </div>
    
    <div class="row">
      <div class="col-5 text-left pl-0">
        <img src="http://books.google.com/books/content?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE73utqwg-BFMcDxI3oWIQenLjNnD233073Wd4ifiiyfFjHieIz0sQpk16gxcp7Doc2pLPHYKJktgiDnM2dGw0rTO-rUQr8pYiYFJwONGTz9ofEnop2cTWLPWAR8T8K6O0Db4hk6A&source=gbs_api" alt="" srcset="" class="border border-primary mt-2 shadow">
      </div>
      <div class="col-6 mr-4">
        <div class="row mt-5 border-bottom border-top border-dark">
          <div class="col-3 pt-2 text-left border-right border-dark">
            <h5>Title</h5>
          </div>
          <div class="col-9 pt-2 text-left">
            <p></p>
          </div>
        </div>
        <div class="row   border-bottom border-dark">
          <div class="col-3 pt-2 text-left border-right border-dark">
            <h5>Subtitle</h5>
          </div>
          <div class="col-9 pt-2 text-left">
            <p>Inside the Hottest Business..</p>
          </div>
        </div>
        <div class="row   border-bottom border-dark">
          <div class="col-3 pt-2 text-left border-right border-dark">
            <h5>Author(s)</h5>
          </div>
          <div class="col-9 pt-2 text-left">
            <p>David Vise, Mark Malseed</p>
          </div>
        </div>
        <div class="row   border-bottom border-dark">
          <div class="col-3 pt-2 text-left border-right border-dark">
            <h5>ISBN</h5>
          </div>
          <div class="col-9 pt-2 text-left">
            <p>0440335701</p>
          </div>
        </div>
        <div class="row   border-bottom border-dark">
          <div class="col-3 pt-2 text-left border-right border-dark">
            <h5>Page Count</h5>
          </div>
          <div class="col-9 pt-2 text-left">
            <p>384</p>
          </div>
        </div>
        <div class="row   border-bottom border-dark">
          <div class="col-3 pt-2 text-left border-right border-dark">
            <h5>Publisher</h5>
          </div>
          <div class="col-9  pt-2 text-left">
            <p>Random House Publishing Group</p>
          </div>
        </div>
      </div>
    </div>


          <div class="modal fade" id="orderModal" tabindex="-1" role="dialog" aria-labelledby="orderModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="orderModalLabel">How Many Would You Like To Order?</h5>
                  <button type="button" class="close text-danger" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">x</span>
                  </button>
                </div>
                <div class="modal-body">
                  <form class="form-inline" style="width: 100%">
                    <div class="form-group" style="width: 100%">
                      <input type="number" style="width: 75%" name="" id="" class=" mb-2 form-control" placeholder="quantity" aria-describedby="helpId">
                      <button type="submit" class="mb-2 ml-4 btn btn-light">Order</button>                      
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
export default {
  name: "bookDetails",
  props: ["bookProp"],
  data() {
    return {};
  },
    mounted() {
        this.$store.dispatch("getActiveBook", this.$route.params.bookId)
        console.log(this.$store.state.activeBook)
  },
    computed: {
      book(){ 
        return this.$store.state.activeBook 
        }
  },
  methods: {},
  components: {}
  
}
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
.titleFont{
  font-size: 1.5em;
}
</style>