import authenticate from "../middleware/authenticate";
import Device from "../model/device";
import Joi from 'joi'


const Image = Joi.object({
    base_url: Joi.string().required(),
    is_gallery: Joi.boolean().required(),
    label: Joi.any(),
    large_url: Joi.string(),
    medium_url: Joi.string(),
    position: Joi.any(),
    small_url: Joi.string(),
    thumbnail_url: Joi.string()
})
const productSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number(),
    original_price: Joi.number().required(),
    description: Joi.string().required(),
    images: Joi.array().items(Image).min(1).required(),
    brandID: Joi.string(),
    specificationID: Joi.string().required()

})

export const getDeviceAll = async (req, res) => {
    try {
        const data = await Device.find().populate({
            path: "brandID"
        }).populate("specificationID")
        res.send({
            message: "Get products successfully",
            data: data
        })
    } catch (err) {
        res.status(500).send({
            message: err
        })
    }
}


export const getDeviceById = async (req, res) => {
    try {
        const id = req.params.id
        const data = await Device.findById(id)
        res.send({
            message: "Get products successfully",
            data: data
        })
    } catch (err) {
        res.status(500).send({
            message: err
        })
    }
}

export const createDevice = async (req, res) => {
    try {
        const body = req.body
        const { error } = productSchema.validate(body)
        if (error) {
            res.status(400).send({
                message: error.message,
            })
        } else {
            const data = await Device.create(body)
            res.send({
                message: "Create successfully",
                data: data
            })
        }


    } catch (err) {
        res.status(500).send({
            message: err
        })
    }
}

export const updateDevice = async (req, res) => {
    try {
        let accessToken = req.headers.authorization
        accessToken = accessToken.split(" ")[1]
        const { role } = jwt.verify(accessToken, "we17317")

        if (role === "admin") {
            console.log(role);
        }
        next()
        // const id = req.params.id
        // const body = req.body
        // const { error } = productSchema.validate(body)
        // if (error) {
        //     res.status(400).send({
        //         message: error.message,
        //     })
        // } else {
        //     const data = await Device.findByIdAndUpdate(id, body)
        //     if (data) {
        //         res.send({
        //             message: "Update successfully",
        //             data: data
        //         })
        //     } else {
        //         res.status(400).send({
        //             message: "Product is not existed"
        //         })
        //     }
        // }
    } catch (err) {
        res.status(500).send({
            message: err
        })
    }
}

export const removeDevice = async (req, res) => {
    try {
        const id = req.params.id
        const data = await Device.findByIdAndRemove(id)
        if (data) {
            res.send({
                message: "Delete successfully",
                data: data
            })
        } else {
            res.status(400).send({
                message: "Product is not existed"
            })
        }

    } catch (err) {
        res.status(500).send({
            message: err
        })
    }
}