import Invoice from "../model/invoice"

export const getAll = async (req, res) => {
    try {
        const data = await Invoice.find().populate({
            path: "UserId"
        })
        res.send({
            data: data,
        })
    } catch (error) {

    }
}

export const create = async (req, res) => {
    try {
        const body = req.body
        const data = await Invoice.create(body)
        res.send({
            message: "Tao thanh cong ",
            data: data
        })
    } catch (error) {

    }
}