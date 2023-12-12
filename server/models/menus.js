import mongoose from "mongoose";
const Schema = mongoose.Schema


const menuSchema = new Schema({
    name: String,
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    price: Number,
    quantity: Number,
    images: {
        type: Array
    },
    isDeleted: Boolean

})
module.exports = mongoose.model('Meuns', menuSchema)