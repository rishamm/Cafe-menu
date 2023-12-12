import mongoose from "mongoose";
const Schema = mongoose.Schema

const categorySchema = new Schema({

    category: String,
    isDeleted: Boolean

})
module.exports = mongoose.model('Category', categorySchema);
