import Brand from '../model/brand'
// import  Joi  from "joi";

// const brandSchema = Joi.object({
//     id: Joi.number().required(),
//     name: Joi.string().required(),
//     slug: Joi.string().required()
// })
export const getBrand = async (req, res) => {
    try {
        const data = await Brand.find()
        return res.send({
            data: data
        })
    } catch (err) {
        return res.send({
            message: err
        })
    }
}

export const createBrand = async (req, res) => {
    try {
        const body = req.body
        const data = await Brand.create(body)
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