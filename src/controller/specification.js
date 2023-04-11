import Joi from 'joi'
import Specifications from "../model/specification";

// const Attribute = Joi.object({
//     code: Joi.string().required(),
//     name: Joi.string().required(),
//     value: Joi.string().required(),
// })
// const specificationSchema = Joi.object({
//     name: Joi.string().required(),
//     attributes: Joi.array().items(Attribute).min(1).required()
// })
export const getSpec = async (req, res) => {
    try {
        const data = await Specifications.find()
        return res.send({
            data: data
        })
    } catch (err) {
        return res.send({
            message: err
        })
    }
}

export const createSpec = async (req, res) => {
    try {
        const body = req.body
        const data = await Specifications.create(body)
        res.send({
            message: "Thêm mới thành công",
            data: data
        })
    } catch (err) {
        return res.send({
            message: err
        })
    }
}