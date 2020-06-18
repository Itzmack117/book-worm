import mongoose from "mongoose"
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

//NOTE subtitle require? Quantity, orderId, invoiceId? 
const Book = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String },
  author: { type: String, required: true },
  ISBN: { type: String, required: true },
  pageCount: { type: Number, required: true },
  publisher: { type: String, required: true },
  description: { type: String, required: true },
  quantity: { type: Number },
}, { timestamps: true, toJSON: { virtuals: true } })


export default Book