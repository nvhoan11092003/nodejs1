
import mongoose from "mongoose";


const { Schema } = mongoose;
const Image = new Schema({
    base_url: {
        type: String,
        required: true
    },
    is_gallery: Boolean,
    label: String,
    large_url: String,
    medium_url: String,
    position: String,
    small_url: String,
    thumbnail_url: String
})


const Device = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: Number,

    original_price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    images: {
        type: [Image],
        required: true
    },
    brandID: {
        type: Schema.ObjectId,
        ref: "brand"
    },
    specificationID: {
        type: Schema.ObjectId,
        ref: "specifications"
    }


});
Device.index({
    name: "text",
    description: "text"
})
export default mongoose.model("device", Device)
