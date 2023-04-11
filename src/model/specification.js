// import { types } from "joi";
import mongoose from "mongoose";

const Schema = mongoose.Schema;
const Attribute = new Schema({

    code: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    }

})

const Specification = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        attributes: {
            type: [Attribute],
            required: true
        }
    }
)
const Specifications = new Schema({
    specifications: {
        type: [Specification],
        required: true
    }

})











export default mongoose.model("specifications", Specifications)