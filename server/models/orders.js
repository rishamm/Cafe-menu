import mongoose from 'mongoose';
const ObjId = mongoose.Schema.ObjectId;

const orderSchema = mongoose.Schema({
    tableNumber: String,
    user: {
        type: ObjId,
        ref: "Users"
        // required: [true, "Name is required"]
    },
    items: [{
        item: {
            type: ObjId,
            ref: "Menus"
        },
        quantity: Number,
        price: Number,
        isCooked: {
            type: Boolean,
            default: false
        },
        suggestions: String
    }],
    // paymentType: {
    //     type: String,
    //     enum: ["COD", "Online", null],
    //     default: null
    // },
    isPaymentCompleted: {
        type: Boolean,
        default: false
    },
    totalPrice: {
        type: Number,
        required: [true, "Total Price is required"]
    },
    date: {
        type: Date,
        default: new Date()
    },
    isActive: {
        type: Boolean,
        default: true
    }
},
    {

        timeStamp: true
    }
)

module.exports = mongoose.model("Orders", orderSchema);