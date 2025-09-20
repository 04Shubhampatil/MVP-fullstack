import Questions from "../models/questions.Model.js";

const createQuestions = async (req, res) => {
    try {

        const questions = await Questions.create(req.body)
        const saveQuestions = await questions.save()
        res.status(200).json({
            message: " Questions nsaved successfully",
            success: true,
            data: saveQuestions
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const getQuestions = async (req, res) => {
    try {
        const getdata = await Questions.find({})
        res.status(200).json({
            getdata,
            success: true,

        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })

    }
}



const getById = async (req, res) => {
    try {
        const getdata = await Questions.findById(req.params.id)
        if (!getdata) {
            res.status(401).json({
                message: "questions not found",
                success: false,

            })

        }
        res.status(200).json({
            getdata,

        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })

    }
}

const getByTopic = async (req, res) => {

    try {
        const getdata = await Questions.find({ topic: req.params.topic })
        if (!getdata) {
            res.status(401).json({
                message: "questions not found",
                success: false,

            })

        }
        res.status(200).json({
            getdata,

        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })

    }

}

const deleteQuestions = async (req, res) => {

    try {
        const deletedata = await Questions.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message: "data deleted successfully"

        })

    } catch (error) {
        res.status(500).json({

            message: error.message
        })
    }

}


export {
    createQuestions,
    getQuestions,
    getById,
    deleteQuestions,
    getByTopic
}