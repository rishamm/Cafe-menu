import mongoose from "mongoose";
const Schema = mongoose.Schema

const categorySchema = new Schema({

    name: String,
    isDeleted: {
        type: Boolean,
        default: false
    }

})
module.exports = mongoose.model('Category', categorySchema);
