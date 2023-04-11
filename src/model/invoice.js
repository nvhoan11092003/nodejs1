import mongoose from "mongoose";
const { Schema } = mongoose
const Invoice = new Schema({
    date: {
        type: Date,
        default: Date.now()
    },
    good: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    userId: {
        type: Schema.ObjectId,
        ref: "user"
    }
})
export default mongoose.model("invoice", Invoice)