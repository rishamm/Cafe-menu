import mongoose from "mongoose";
const Schema = mongoose.Schema


const menuSchema = new Schema({
    name: String,
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    description: String,
    price: Number,
    quantity: Number,
    estimatedTime: Number,
    images: {
        type: Array
    },
    isDeleted: Boolean

})
module.exports = mongoose.model('Meuns', menuSchema)