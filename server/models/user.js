import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
    phoneNumber: {
        type: Number,
        required: [true, "Phone Number required"]
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("Users", userSchema);