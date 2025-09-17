import Topics from "../models/topic.Model.js";

const createTopics = async (req, res) => {
    try {

        const topic = await Topics.create(req.body)

        const savedTopic = await topic.save()

        res.status(200).json({
            message: "Topic saved successfully",
            success: true,
            data: savedTopic
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const getTopics = async (req, res) => {
    try {
        const topics = await Topics.find({})
        res.status(200).json({
            topics, success: true
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })

    }
}

const getbyIDTopics = async (req, res) => {
    try {
        const topics = await Topics.findById(req.params.id)
        if (!topics) {
            res.status(401).json({
                message: "topics not found",
                success: false
            })
        }
        res.status(200).json(topics)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })

    }
}

const deleteTopics = async (req, res) => {
    try {
      
        const deletedTopic = await Topics.findByIdAndDelete(req.params.id);

        if (!deletedTopic) {
            return res.status(404).json({
                success: false,
                message: "Topic not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Topic deleted successfully",
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error while deleting topic",
            error: error.message,
        });
    }
};


export{
    getTopics,
    getbyIDTopics,
    createTopics,
    deleteTopics
}